import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { CoursesCardList } from '../courses-card-list/courses-card-list';
import { CoursesService } from '../services/courses.service';
import { Tabs } from '../tabs/tabs';
import { TabData } from '../tabs/tabs.model';
import { CourseCategory } from '../model/course';

@Component({
  selector: 'courses',
  imports: [CoursesCardList, Tabs],
  templateUrl: './courses.html',
  styleUrl: './courses.scss',
})
export class Courses implements OnInit {
  protected coursesService = inject(CoursesService);

  activeTab = signal<CourseCategory>('beginner');

  courseTabs: TabData[] = [
    { label: 'Beginner', value: 'beginner' },
    { label: 'Advanced', value: 'advanced' },
  ];

  beginnerCourses = computed(() =>
    this.coursesService.allCourses().filter(course => course.category !== 'ADVANCED')
  );

  advancedCourses = computed(() =>
    this.coursesService.allCourses().filter(course => course.category === 'ADVANCED')
  );

  ngOnInit() {
    this.reloadCourses();
  }

  async reloadCourses() {
    await this.coursesService.reloadAllCourses();
  }

  onTabChanged(newTab: CourseCategory) {
    this.activeTab.set(newTab);
  }
}
