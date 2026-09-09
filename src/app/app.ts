import { Component, computed, signal } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { Toolbar } from './toolbar/toolbar';
import { Courses } from './courses/courses';
import {CourseCard} from './course-card/course-card';
import {Course, CourseCategory} from './model/course';
import {Tabs} from './tabs/tabs';
import {TabData} from './tabs/tabs.model';
import {MOCK_COURSES} from './shared/mock-courses';

@Component({
  selector: 'root',
  imports: [Toolbar, Courses,CourseCard, Tabs],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {

  activeTab = signal(CourseCategory.BEGINNER);

  coursesResource = httpResource<Course[]>(() => '/api/courses', {
    defaultValue: [],
  });

  courses = computed(() =>
    this.coursesResource.value().filter(course => course.category === this.activeTab())
  );

  courseTabs: TabData[] = [
    { label: 'Beginner', value: CourseCategory.BEGINNER },
    { label: 'Advanced', value: CourseCategory.ADVANCED },
  ];

  onTabChanged(newTab: CourseCategory) {
    this.activeTab.set(newTab);
    console.log(`active tab: ${newTab}`);
  }

  onEditStarted(message:string) {
    console.log(`onEditStarted called with message: ${message}`);
  }

}
