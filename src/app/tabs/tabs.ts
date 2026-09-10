import { Component, input, output } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { CourseCategory } from '../model/course';
import { TabData } from './tabs.model';

@Component({
  selector: 'tabs',
  imports: [UpperCasePipe],
  templateUrl: './tabs.html',
  styleUrl: './tabs.scss',
})
export class Tabs {

}
