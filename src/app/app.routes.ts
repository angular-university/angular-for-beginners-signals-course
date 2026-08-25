import { Routes } from '@angular/router';
import { Courses } from './courses/courses';
import { CoursePage } from './course-page/course-page';
import { AboutUs } from './about-us/about-us';
import { courseResolver } from './services/course.resolver';

export const routes: Routes = [
  {
    path: 'courses',
    component: Courses,
    title: 'Courses',
  },
  {
    path: 'courses/:id',
    component: CoursePage,
    title: 'Course',
    resolve: {
      course: courseResolver,
    },
  },
  {
    path: 'about',
    component: AboutUs,
    title: 'About Us',
  },
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: '**', redirectTo: '/courses' },
];
