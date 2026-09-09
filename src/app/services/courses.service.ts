import { Service } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { Course } from '../model/course';

@Service()
export class CoursesService {

  private coursesResource = httpResource<Course[]>(() => '/api/courses', {
    defaultValue: [],
  });

  readonly allCourses = this.coursesResource.value;

  readonly loading = this.coursesResource.isLoading;

  readonly error = this.coursesResource.error;

  reloadAllCourses() {
    this.coursesResource.reload();
  }

}
