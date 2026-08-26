import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Course, CourseCategory } from '../model/course';
import { MOCK_COURSES } from '../shared/mock-courses';
import { CourseCard } from '../course-card/course-card';
import { CoursesCardList } from '../courses-card-list/courses-card-list';
import { CoursesService } from '../services/courses.service';
import { Tabs } from '../tabs/tabs';
import { TabData } from '../tabs/tabs.model';

@Component({
  selector: 'courses',
  templateUrl: './courses.html',
  styleUrl: './courses.scss',
})
export class Courses {

}
