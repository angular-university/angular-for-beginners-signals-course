import { Component } from '@angular/core';
import { Toolbar } from './toolbar/toolbar';
import { Courses } from './courses/courses';
import {CourseCard} from './course-card/course-card';
import {Course} from './model/course';

@Component({
  selector: 'root',
  imports: [Toolbar, Courses,CourseCard],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {

  courseData: Course = {
    id: 23,
    title: 'Angular For Beginners (Signals Edition)',
    description:
      'Learn Angular from scratch using the new Signals API — build real apps with the modern Angular paradigm',
    iconUrl:
      'https://d3vigmphadbn9b.cloudfront.net/course-images/large-images/angular-for-beginners.jpg',
    category: 'BEGINNER',
    seqNo: 0,
    price: 0,
  };

}
