import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private http = inject(HttpClient);

  private courses = signal<Course[]>([]);
  readonly allCourses = this.courses.asReadonly();

  // true while a request is in flight, so the screen can show a spinner
  readonly loading = signal(false);

  async reloadAllCourses(): Promise<void> {
    this.loading.set(true);

    try {
      const res = await firstValueFrom(this.http.get<{ payload: Course[] }>('/api/courses'));

      this.courses.set(res.payload);
    } finally {
      this.loading.set(false);
    }
  }

  async saveCourse(courseId: number, changes: Partial<Course>): Promise<void> {
    this.loading.set(true);

    try {
      await firstValueFrom(this.http.put<Course>(`/api/courses/${courseId}`, changes));
    } finally {
      this.loading.set(false);
    }
  }
}
