import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, ResolveFn } from "@angular/router";
import { CoursesService } from './courses.service';
import { Course } from '../model/course';

export const courseResolver: ResolveFn<Course> = (
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot
): Promise<Course> => {

  const coursesService = inject(CoursesService);

  return coursesService.findCourseById(route.params['id']);
};