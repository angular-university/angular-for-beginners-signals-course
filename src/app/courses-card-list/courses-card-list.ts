import { Component, input, output, signal } from '@angular/core';
import { Course } from '../model/course';
import { CourseCard } from '../course-card/course-card';
import { CourseDialog } from '../course-dialog/course-dialog';

@Component({
  selector: 'courses-card-list',
  imports: [CourseCard, CourseDialog],
  templateUrl: './courses-card-list.html',
  styleUrl: './courses-card-list.scss',
})
export class CoursesCardList {
  courses = input.required<Course[]>();
  courseEdited = output();

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
