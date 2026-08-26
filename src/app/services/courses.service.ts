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

  async reloadAllCourses(): Promise<Course[]> {
    const res = await firstValueFrom(this.http.get<{ payload: Course[] }>('/api/courses'));

    const courses = res.payload;
    this.courses.set(courses);

    return courses;
  }

  async saveCourse(courseId: number, changes: Partial<Course>): Promise<void> {
    await firstValueFrom(this.http.put<Course>(`/api/courses/${courseId}`, changes));
  }
}
