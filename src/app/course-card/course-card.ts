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

  course = input.required<Course>();

  onCardClick() {
    console.log('card clicked:', this.course().title);
  }

  onEditClick(event: MouseEvent) {
    console.log('edit clicked:', event.target);
    // this.course.title += ' v2';
    event.stopPropagation();
  }

}
