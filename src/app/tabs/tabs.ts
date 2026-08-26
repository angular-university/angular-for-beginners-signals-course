import { Component, input, output } from '@angular/core';
import { TabData } from './tabs.model';
import { CourseCategory } from '../model/course';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.html',
  styleUrl: './tabs.scss',
})
export class TabsComponent {
  tabs = input.required<TabData[]>();
  activeTab = input.required<CourseCategory>();

  tabChanged = output<CourseCategory>();

  selectTab(value: CourseCategory) {
    this.tabChanged.emit(value);
  }
}
