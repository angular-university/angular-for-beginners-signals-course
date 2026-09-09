import { Service, inject } from '@angular/core';
import { HttpClient, httpResource } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Course } from '../model/course';

@Service()
export class CoursesService {

  private http = inject(HttpClient);

  private coursesResource = httpResource<Course[]>(() => '/api/courses', {
    defaultValue: [],
  });

  readonly allCourses = this.coursesResource.value;

  readonly loading = this.coursesResource.isLoading;

  readonly error = this.coursesResource.error;

  reloadAllCourses() {
    this.coursesResource.reload();
  }

  async saveCourse(courseId: number, changes: { title: string }) {
    await firstValueFrom(this.http.put<Course>(`/api/courses/${courseId}`, changes));
    this.reloadAllCourses();
  }

}
