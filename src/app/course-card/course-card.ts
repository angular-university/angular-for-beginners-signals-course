import { Component, input, output } from '@angular/core';
import {CurrencyPipe, TitleCasePipe, UpperCasePipe} from '@angular/common';
import { Course, CourseCategory } from '../model/course';

@Component({
  selector: 'course-card',
  imports: [CurrencyPipe, TitleCasePipe, UpperCasePipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.scss',
})
export class CourseCard {

  readonly categories = CourseCategory;

  course = input.required<Course>();

  index = input.required<number>();

  editStarted = output<Course>();

  onCardClick() {
    console.log('card clicked:', this.course().title);
  }

  onEditClick(event: MouseEvent) {
    console.log('edit clicked:', event.target);
    // this.course.title += ' v2';
    event.stopPropagation();

    this.editStarted.emit(this.course());
  }

}
