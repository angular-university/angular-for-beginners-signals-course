import { Component, computed, inject, input, OnInit, output, signal } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'course-dialog',
  templateUrl: './course-dialog.html',
  styleUrl: './course-dialog.scss',
})
export class CourseDialog implements OnInit {
  private coursesService = inject(CoursesService);

  course = input.required<Course>();

  cancelled = output();
  saved = output();

  title = signal('');
  saving = signal(false);
  saveError = signal('');

  canSave = computed(() => this.title().trim().length > 0);

  ngOnInit() {
    this.title.set(this.course().description);
  }

  onTitleInput(event: Event) {
    const input = event.target as HTMLInputElement;

    this.title.set(input.value);
  }

  cancel() {
    this.cancelled.emit();
  }

  async save() {
    this.saveError.set('');
    this.saving.set(true);

    try {
      await this.coursesService.saveCourse(this.course().id, { description: this.title().trim() });
    } catch {
      this.saveError.set('Could not save the title. Please try again.');
      return;
    } finally {
      this.saving.set(false);
    }

    this.saved.emit();
  }
}
