import { Component, computed, inject, input, output, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'courses-card-list',
  imports: [CurrencyPipe],
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

  // set when saving fails, so the dialog can show a message
  saveError = signal('');

  // true while the title is being saved
  saving = signal(false);

  canSave = computed(() => this.title().trim().length > 0);

  editCourse(course: Course) {
    this.title.set(course.description);
    this.saveError.set('');
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
    this.saveError.set('');
    this.saving.set(true);

    try {
      await this.coursesService.saveCourse(course.id, { description: this.title().trim() });
    } catch {
      this.saveError.set('Could not save the title. Please try again.');
      return;
    } finally {
      this.saving.set(false);
    }

    this.courseInEdition.set(null);
    this.courseEdited.emit();
  }
}
