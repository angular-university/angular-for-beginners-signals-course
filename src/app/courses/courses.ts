import { Component, signal, computed, inject, OnInit } from '@angular/core';
import { CoursesCardList } from '../courses-card-list/courses-card-list';
import { CoursesService } from '../services/courses.service';
import { TabsComponent } from '../tabs/tabs';
import { TabData } from '../tabs/tabs.model';
import { CourseCategory } from '../model/course';

@Component({
  selector: 'courses',
  imports: [CoursesCardList, TabsComponent],
  templateUrl: './courses.html',
  styleUrls: ['./courses.scss']
})
export class Courses implements OnInit {
  private courseService = inject(CoursesService);

  allCourses = this.courseService.allCourses;
  activeTab = signal<CourseCategory>('beginner');

  courseTabs: TabData[] = [
    { label: 'Beginner', value: 'beginner' },
    { label: 'Advanced', value: 'advanced' }
  ];

  beginnerCourses = computed(() =>
    this.allCourses().filter(c => c.category === 'BEGINNER')
  );

  advancedCourses = computed(() =>
    this.allCourses().filter(c => c.category === 'ADVANCED')
  );

  ngOnInit() {
    this.reloadCourses();
  }

  async reloadCourses() {
    await this.courseService.reloadAllCourses();
  }

  onTabChanged(newTab: CourseCategory) {
    this.activeTab.set(newTab);
  }
}
