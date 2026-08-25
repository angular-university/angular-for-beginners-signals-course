import { Component, inject, input, linkedSignal, output } from '@angular/core';
import { form, required, submit, FormField } from '@angular/forms/signals';
import { Course, CourseData } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'courses-dialog',
  imports: [FormField],
  templateUrl: './courses-dialog.html',
  styleUrl: './courses-dialog.scss',
})
export class CoursesDialog {
  private coursesService = inject(CoursesService);

  course = input.required<Course>();

  // emits true when the course was saved, false when the dialog was dismissed
  closed = output<boolean>();

  // the form data, initialized from the course being edited
  courseModel = linkedSignal<CourseData>(() => ({
    description: this.course().titles.description ?? '',
    category: this.course().category ?? '',
    releasedAt: new Date().toLocaleDateString('en-CA'),
    longDescription: this.course().titles.longDescription ?? '',
  }));

  courseForm = form(this.courseModel, schemaPath => {
    required(schemaPath.description, { message: 'Description is required' });
    required(schemaPath.category, { message: 'Category is required' });
    required(schemaPath.releasedAt, { message: 'Release Date is required' });
    required(schemaPath.longDescription, { message: 'Long Description is required' });
  });

  close() {
    this.closed.emit(false);
  }

  async save() {
    await submit(this.courseForm, async form => {
      const value = form().value();

      const changes: Partial<Course> = {
        category: value.category,
        titles: {
          description: value.description,
          longDescription: value.longDescription,
        },
      };

      await this.coursesService.saveCourse(this.course().id, changes);

      this.closed.emit(true);
    });
  }
}
