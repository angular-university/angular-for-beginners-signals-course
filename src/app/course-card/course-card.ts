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

}
