import { Component, signal } from '@angular/core';

@Component({
  selector: 'about-us',
  imports: [],
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss',
})
export class AboutUs {
  title = signal('Welcome!');
  subTitle = signal('Welcome to the Angular for Beginners with Signals Course');
  pageDescription = signal(
    'Learn Angular from scratch, the modern way. This course covers the essentials step by step: components, templates, services, routing and forms, all built on top of signals, the reactivity model at the heart of modern Angular. No previous Angular experience needed.'
  );
}
