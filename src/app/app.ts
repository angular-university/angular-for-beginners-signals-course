import { Component } from '@angular/core';
import { Toolbar } from './toolbar/toolbar';
import { Courses } from './courses/courses';
import {CourseCard} from './course-card/course-card';

@Component({
  selector: 'root',
  imports: [Toolbar, Courses,CourseCard],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {

}
