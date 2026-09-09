import { Component, computed, inject, input, OnInit, output, signal } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'course-dialog',
  templateUrl: './course-dialog.html',
  styleUrl: './course-dialog.scss',
})
export class CourseDialog implements OnInit {

  course = input.required<Course>();

  cancelled = output();

  saved = output();

  title = signal('');

  saveError = signal('');

  canSave = computed(() => this.title().trim().length > 0);

  ngOnInit() {
    this.title.set(this.course().title);
  }

  onTitleInput(event: Event) {
    const input = event.target as HTMLInputElement;

    this.title.set(input.value);
  }

  async save() {
    this.saveError.set('');

    try {
      this.saved.emit();
    } catch {
      this.saveError.set('Could not save the course. Please try again.');
    }
  }

}
