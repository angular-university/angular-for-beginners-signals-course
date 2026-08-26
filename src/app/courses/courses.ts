import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { CoursesCardList } from '../courses-card-list/courses-card-list';
import { CoursesService } from '../services/courses.service';
import { Tabs } from '../tabs/tabs';
import { TabData } from '../tabs/tabs.model';
import { CourseCategory } from '../model/course';

@Component({
  selector: 'courses',
  imports: [CoursesCardList, Tabs],
  templateUrl: './courses.html',
  styleUrl: './courses.scss',
})
export class Courses implements OnInit {
  protected coursesService = inject(CoursesService);

  activeTab = signal<CourseCategory>('beginner');

  // false shows the newest courses first
  sortAscending = signal(true);

  courseTabs: TabData[] = [
    { label: 'Beginner', value: 'beginner' },
    { label: 'Advanced', value: 'advanced' },
  ];

  sortedCourses = computed(() => {
    const courses = [...this.coursesService.allCourses()];

    return courses.sort((c1, c2) =>
      this.sortAscending() ? c1.seqNo - c2.seqNo : c2.seqNo - c1.seqNo
    );
  });

  beginnerCourses = computed(() =>
    this.sortedCourses().filter(course => course.category !== 'ADVANCED')
  );

  advancedCourses = computed(() =>
    this.sortedCourses().filter(course => course.category === 'ADVANCED')
  );

  ngOnInit() {
    this.reloadCourses();
  }

  async reloadCourses() {
    await this.coursesService.reloadAllCourses();
  }

  onTabChanged(newTab: CourseCategory) {
    this.activeTab.set(newTab);
  }

  toggleSortOrder() {
    this.sortAscending.update(ascending => !ascending);
  }
}
