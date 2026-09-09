import { Component, computed, inject, signal } from '@angular/core';
import { Toolbar } from './toolbar/toolbar';
import { Courses } from './courses/courses';
import { CourseCard } from './course-card/course-card';
import { CourseCategory } from './model/course';
import { Tabs } from './tabs/tabs';
import { TabData } from './tabs/tabs.model';
import { CoursesService } from './services/courses.service';

@Component({
  selector: 'root',
  imports: [Toolbar, Courses, CourseCard, Tabs],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {

  protected coursesService = inject(CoursesService);

  activeTab = signal(CourseCategory.BEGINNER);

  courses = computed(() =>
    this.coursesService.allCourses().filter(course => course.category === this.activeTab())
  );

  courseTabs: TabData[] = [
    { label: 'Beginner', value: CourseCategory.BEGINNER },
    { label: 'Advanced', value: CourseCategory.ADVANCED },
  ];

  onTabChanged(newTab: CourseCategory) {
    this.activeTab.set(newTab);
    console.log(`active tab: ${newTab}`);
  }

  onEditStarted(message: string) {
    console.log(`onEditStarted called with message: ${message}`);
  }

}
