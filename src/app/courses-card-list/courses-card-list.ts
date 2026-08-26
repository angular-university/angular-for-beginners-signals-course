import { Component, input, output, signal } from '@angular/core';
import { Course } from '../model/course';
import { CoursesDialog } from '../courses-dialog/courses-dialog';

@Component({
  selector: 'courses-card-list',
  templateUrl: './courses-card-list.html',
  styleUrl: './courses-card-list.scss',
  imports: [CoursesDialog],
})
export class CoursesCardList {
  courses = input.required<Course[]>();
  courseEdited = output();

  // the course currently being edited, or null when the dialog is closed
  courseInEdition = signal<Course | null>(null);

  editCourse(course: Course) {
    this.courseInEdition.set(course);
  }

  onDialogClosed(saved: boolean) {
    this.courseInEdition.set(null);

    if (saved) {
      this.courseEdited.emit();
    }
  }
}
