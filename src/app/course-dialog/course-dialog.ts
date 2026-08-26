import { Component, computed, inject, input, OnInit, output, signal } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'course-dialog',
  templateUrl: './course-dialog.html',
  styleUrl: './course-dialog.scss',
})
export class CourseDialog {

}
