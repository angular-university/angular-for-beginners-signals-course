import { Component, input, output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  imports: [CurrencyPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.scss',
})
export class CourseCard {

  course: Course = {
    id: 23,
    title: 'Angular For Beginners (Signals Edition) v3',
    description:
      'Learn Angular from scratch using the new Signals API — build real apps with the modern Angular paradigm v3',
    iconUrl:
      'https://d3vigmphadbn9b.cloudfront.net/course-images/large-images/angular-for-beginners.jpg',
    category: 'BEGINNER v3',
    seqNo: 0,
    price: 0,
  };

}
