import { Component, input, output, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Course } from '../model/course';
import { CourseDialog } from '../course-dialog/course-dialog';

@Component({
  selector: 'courses-card-list',
  imports: [CurrencyPipe, CourseDialog],
  templateUrl: './courses-card-list.html',
  styleUrl: './courses-card-list.scss',
})
export class CoursesCardList {
  courses = input.required<Course[]>();
  courseEdited = output();

  // the course being edited, or null when the dialog is closed
  courseInEdition = signal<Course | null>(null);

  editCourse(course: Course) {
    this.courseInEdition.set(course);
  }

  closeDialog() {
    this.courseInEdition.set(null);
  }

  onCourseSaved() {
    this.courseInEdition.set(null);
    this.courseEdited.emit();
  }
}
