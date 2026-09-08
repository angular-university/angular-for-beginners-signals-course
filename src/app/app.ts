import { Component, computed, signal } from '@angular/core';
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

  activeTab = signal(CourseCategory.BEGINNER);

  courses = computed(() => {
    const category = this.activeTab();
    return MOCK_COURSES.filter(course => course.category == category);
  });

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
