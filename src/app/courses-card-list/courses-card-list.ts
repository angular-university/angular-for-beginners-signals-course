import { Component, computed, inject, input, output, signal } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'courses-card-list',
  templateUrl: './courses-card-list.html',
  styleUrl: './courses-card-list.scss',
})
export class CoursesCardList {
  private coursesService = inject(CoursesService);

  courses = input.required<Course[]>();
  courseEdited = output();

  // the course being edited, or null when the dialog is closed
  courseInEdition = signal<Course | null>(null);

  // the title the user is typing in the dialog
  title = signal('');

  readonly maxTitleLength = 70;

  canSave = computed(() => this.title().trim().length > 0);

  // how full the title is, as a percentage of the maximum length
  titleLengthPercent = computed(() =>
    Math.min(100, (this.title().length / this.maxTitleLength) * 100)
  );

  editCourse(course: Course) {
    this.title.set(course.description);
    this.courseInEdition.set(course);
  }

  onTitleInput(event: Event) {
    const input = event.target as HTMLInputElement;

    this.title.set(input.value);
  }

  closeDialog() {
    this.courseInEdition.set(null);
  }

  async saveTitle(course: Course) {
    await this.coursesService.saveCourse(course.id, { description: this.title().trim() });

    this.courseInEdition.set(null);
    this.courseEdited.emit();
  }
}
