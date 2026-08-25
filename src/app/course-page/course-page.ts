import { Component, computed, inject, OnInit, resource, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { HighlightDirective } from '../directives/highlight.directive';
import { DurationFormatPipe } from '../pipes/duration-format.pipe';

const SEARCH_DEBOUNCE_MS = 400;

@Component({
  selector: 'course-page',
  imports: [DurationFormatPipe, HighlightDirective],
  templateUrl: './course-page.html',
  styleUrl: './course-page.scss',
})
export class CoursePage implements OnInit {
  private route = inject(ActivatedRoute);
  private coursesService = inject(CoursesService);
  private router = inject(Router);

  course = signal<Course | null>(null);
  pageIndex = signal(0);
  pageSize = signal(3);
  sortDirection = signal<'asc' | 'desc'>('asc');
  sortField = signal('seqNo');
  searchQuery = signal('');

  private searchTimeout?: ReturnType<typeof setTimeout>;

  lessonsResource = resource({
    params: () => {
      const courseId = this.course()?.id;

      if (!courseId) {
        return undefined;
      }

      return {
        courseId,
        filter: this.searchQuery(),
        sortOrder: this.sortDirection(),
        pageNumber: this.pageIndex(),
        pageSize: this.pageSize(),
      };
    },
    loader: async ({ params }) => {
      return this.coursesService.findLessons(
        params.courseId,
        params.filter,
        params.sortOrder,
        params.pageNumber,
        params.pageSize
      );
    },
  });

  lessons = computed(() => this.lessonsResource.value() ?? []);
  currentPage = computed(() => this.pageIndex() + 1);
  totalPages = computed(() => Math.ceil((this.course()?.lessonsCount || 0) / this.pageSize()));
  isFirstPage = computed(() => this.pageIndex() === 0);
  isLastPage = computed(() => this.currentPage() >= this.totalPages());

  ngOnInit() {
    this.course.set(this.route.snapshot.data['course']);
  }

  goBack() {
    this.router.navigate(['/courses']);
  }

  nextPage() {
    if (!this.isLastPage()) {
      this.pageIndex.update(page => page + 1);
    }
  }

  prevPage() {
    if (!this.isFirstPage()) {
      this.pageIndex.update(page => page - 1);
    }
  }

  onPageSizeChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.pageSize.set(Number(select.value));
    this.pageIndex.set(0);
  }

  toggleSort() {
    this.sortDirection.update(direction => (direction === 'asc' ? 'desc' : 'asc'));
    this.pageIndex.set(0);
  }

  // waits for the user to stop typing before triggering a new search
  onSearch(query: string) {
    clearTimeout(this.searchTimeout);

    this.searchTimeout = setTimeout(() => {
      this.searchQuery.set(query);
      this.pageIndex.set(0);
    }, SEARCH_DEBOUNCE_MS);
  }
}
