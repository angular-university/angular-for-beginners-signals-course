import { Component, input, output, signal } from '@angular/core';
import { Course } from '../model/course';
import { CourseCard } from '../course-card/course-card';

@Component({
  selector: 'courses-card-list',
  imports: [CourseCard],
  templateUrl: './courses-card-list.html',
  styleUrl: './courses-card-list.scss',
})
export class CoursesCardList {

}
