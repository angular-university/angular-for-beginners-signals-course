import { Component } from '@angular/core';
import { Toolbar } from './toolbar/toolbar';
import { Courses } from './courses/courses';
import {CourseCard} from './course-card/course-card';
import {Course} from './model/course';
import {MOCK_COURSES} from './shared/mock-courses';

@Component({
  selector: 'root',
  imports: [Toolbar, Courses,CourseCard],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {

  courses = MOCK_COURSES;

  onEditStarted(message:string) {
    console.log(`onEditStarted called with message: ${message}`);
  }

}
