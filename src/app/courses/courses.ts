import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { CoursesCardList } from '../courses-card-list/courses-card-list';
import { CoursesService } from '../services/courses.service';
import { TabsComponent } from '../tabs/tabs';
import { TabData } from '../tabs/tabs.model';
import { CourseCategory } from '../model/course';

@Component({
  selector: 'courses',
  imports: [CoursesCardList, TabsComponent],
  templateUrl: './courses.html',
  styleUrl: './courses.scss',
})
export class Courses implements OnInit {
  protected coursesService = inject(CoursesService);

  allCourses = this.coursesService.allCourses;
  activeTab = signal<CourseCategory>('beginner');

  courseTabs: TabData[] = [
    { label: 'Beginner', value: 'beginner' },
    { label: 'Advanced', value: 'advanced' },
  ];

  beginnerCourses = computed(() =>
    this.sortedCourses().filter(course => course.category !== 'ADVANCED')
  );

  advancedCourses = computed(() =>
    this.sortedCourses().filter(course => course.category === 'ADVANCED')
  );

  private sortedCourses = computed(() =>
    [...this.allCourses()].sort((c1, c2) => c1.seqNo - c2.seqNo)
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
