import { Service, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Course } from '../model/course';

@Service()
export class CoursesService {
  private http = inject(HttpClient);

  private courses = signal<Course[]>([]);
  readonly allCourses = this.courses.asReadonly();

  readonly loading = signal(false);

  readonly error = signal('');

  async reloadAllCourses(): Promise<void> {
    this.loading.set(true);
    this.error.set('');

    try {
      const courses = await firstValueFrom(this.http.get<Course[]>('/api/courses'));

      this.courses.set(courses);
    } catch {
      this.error.set('Could not load the courses. Is the server running?');
    } finally {
      this.loading.set(false);
    }
  }

  async saveCourse(courseId: number, changes: { description: string }): Promise<void> {
    await firstValueFrom(this.http.put<Course>(`/api/courses/${courseId}`, changes));
  }
}
