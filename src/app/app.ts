import { Component } from '@angular/core';
import { Toolbar } from './toolbar/toolbar';
import { Courses } from './courses/courses';
import {CourseCard} from './course-card/course-card';
import {Course, CourseCategory} from './model/course';
import {MOCK_COURSES} from './shared/mock-courses';
import {Tabs} from './tabs/tabs';
import {TabData} from './tabs/tabs.model';

@Component({
  selector: 'root',
  imports: [Toolbar, Courses,CourseCard, Tabs],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {

  courses = MOCK_COURSES;

  courseTabs: TabData[] = [
    { label: 'Beginner', value: 'beginner' },
    { label: 'Advanced', value: 'advanced' },
  ];

  activeTab: CourseCategory = 'beginner';

  onTabChanged(newTab: CourseCategory) {
    this.activeTab = newTab;
    console.log(`active tab: ${newTab}`);
  }

  onEditStarted(message:string) {
    console.log(`onEditStarted called with message: ${message}`);
  }

}
