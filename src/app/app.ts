import { Component } from '@angular/core';
import { Toolbar } from './toolbar/toolbar';
import { Courses } from './courses/courses';
import { GlobalLoading } from './shared/loading-indicator/global-loading';

@Component({
  selector: 'root',
  imports: [Toolbar, Courses, GlobalLoading],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {

}
