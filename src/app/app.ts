import { Component } from '@angular/core';
import { Toolbar } from './toolbar/toolbar';
import { Courses } from './courses/courses';

@Component({
  selector: 'root',
  imports: [Toolbar, Courses],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {

}
