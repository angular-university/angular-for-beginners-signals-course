import { Course } from './models/course.model.js';

export const COURSES: Record<number, Course> = {

  // ── Group 0: This course ───────────────────────────────────────────────────
  23: {
    id: 23,
    title: 'Angular For Beginners (Signals Edition)',
    description: 'Learn Angular from scratch using the new Signals API — build real apps with the modern Angular paradigm',
    iconUrl: 'https://d3vigmphadbn9b.cloudfront.net/course-images/large-images/angular-for-beginners.jpg',
    category: 'BEGINNER',
    lessonsCount: 11,
    seqNo: 0,
    url: 'angular-for-beginners-course',
    price: 0
  },

  // ── Group 1: Flagship new courses ──────────────────────────────────────────

  18: {
    id: 18,
    title: 'Angular Router In Depth (Signals Edition)',
    description: 'Build large-scale Single Page Applications with the powerful Angular Router, using modern signals, standalone components and zoneless change detection.',
    iconUrl: 'https://d3vigmphadbn9b.cloudfront.net/course-images/large-images/angular-router-in-depth.jpg',
    category: 'BEGINNER',
    lessonsCount: 11,
    seqNo: 5,
    url: 'angular-router-course',
    price: 50
  },

  19: {
    id: 19,
    title: 'Angular Forms In Depth (Signals Edition)',
    description: 'Build complex enterprise data forms using Angular Signal Forms — the modern, reactive approach',
    iconUrl: 'https://d3vigmphadbn9b.cloudfront.net/course-images/large-images/angular-forms-in-depth.jpg',
    category: 'BEGINNER',
    lessonsCount: 11,
    seqNo: 2,
    url: 'angular-forms-course',
    price: 50
  },

  20: {
    id: 20,
    title: 'Angular AI In Depth (With Claude Code)',
    description: 'Build intelligent Angular applications powered by AI — integrate Claude, stream LLM responses, and ship production AI features',
    iconUrl: 'https://d3vigmphadbn9b.cloudfront.net/course-images/large-images/angular-ai-in-depth.jpg',
    category: 'BEGINNER',
    lessonsCount: 11,
    seqNo: 3,
    url: 'angular-ai-course',
    price: 50
  },

  21: {
    id: 21,
    title: 'Angular Testing In Depth (Signals Edition)',
    description: 'Master unit testing, component testing and E2E testing of Angular Signal-based applications',
    iconUrl: 'https://d3vigmphadbn9b.cloudfront.net/course-images/large-images/angular-testing-In-depth.jpg',
    category: 'BEGINNER',
    lessonsCount: 11,
    seqNo: 4,
    url: 'angular-testing-signals-course',
    price: 50
  },

  // ── Group 2: Signals Edition (coming soon) ─────────────────────────────────


  24: {
    id: 24,
    title: 'Angular In Depth (Signals Edition)',
    description: 'A deep dive into Angular internals — change detection, DI, routing, hydration and performance using Signals',
    iconUrl: 'https://d3vigmphadbn9b.cloudfront.net/course-images/large-images/angular-in-depth-with-signals.jpg',
    category: 'BEGINNER',
    lessonsCount: 11,
    seqNo: 1,
    url: 'angular-in-depth-signals-course',
    price: 50
  },

  22: {
    id: 22,
    title: 'Modern Angular With Signals',
    description: 'Learn Angular Signals from scratch — signal(), computed(), effect(), zoneless apps, and the NgRx Signal Store',
    iconUrl: 'https://d3vigmphadbn9b.cloudfront.net/course-images/large-images/angular-signals-course.jpg',
    category: 'BEGINNER',
    lessonsCount: 11,
    seqNo: 6,
    url: 'angular-signals-course',
    price: 50
  },

  // ── Group 3: Core catalog ──────────────────────────────────────────────────

  5: {
    id: 5,
    title: 'Angular For Beginners',
    description: 'Establish a solid layer of Angular fundamentals — components, services, routing, forms and HTTP',
    iconUrl: 'https://angular-academy.s3.amazonaws.com/thumbnails/angular2-for-beginners-small-v2.png',
    category: 'BEGINNER',
    lessonsCount: 11,
    seqNo: 7,
    url: 'angular-for-beginners',
    price: 50
  },

  25: {
    id: 25,
    title: 'Typescript: The Ultimate Bootcamp',
    description: 'Complete TypeScript from scratch — types, generics, advanced patterns, and building a Node REST API',
    iconUrl: 'https://angular-university.s3-us-west-1.amazonaws.com/course-images/typescript-bootcamp-2.jpg',
    category: 'BEGINNER',
    lessonsCount: 11,
    seqNo: 8,
    url: 'typescript-bootcamp-course',
    price: 50
  },

  2: {
    id: 2,
    title: 'Angular Core Deep Dive',
    description: 'A detailed walk-through of the most important part of Angular — the Core and Common modules',
    iconUrl: 'https://d3vigmphadbn9b.cloudfront.net/course-images/large-images/angular-core-deep-dive-new-2.jpg',
    category: 'BEGINNER',
    lessonsCount: 11,
    seqNo: 9,
    url: 'angular-core-course',
    price: 50
  },

  3: {
    id: 3,
    title: 'RxJs In Practice Course',
    description: 'Understand the RxJs Observable pattern, learn the RxJs Operators via practical real-world examples',
    iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/rxjs-in-practice-course.png',
    category: 'BEGINNER',
    lessonsCount: 11,
    seqNo: 10,
    url: 'rxjs-course',
    price: 50
  },

  17: {
    id: 17,
    title: 'Reactive Angular Course',
    description: 'Build Angular applications in Reactive style using plain RxJs — Patterns and Anti-Patterns',
    iconUrl: 'https://angular-university.s3-us-west-1.amazonaws.com/course-images/reactive-angular-course.jpg',
    category: 'BEGINNER',
    lessonsCount: 11,
    seqNo: 11,
    url: 'reactive-angular-course',
    price: 50
  },

  4: {
    id: 4,
    title: 'NgRx (with NgRx Data) - The Complete Guide',
    description: 'Learn the modern NgRx Ecosystem — Store, Effects, Entity, Router Store, NgRx Data, and DevTools',
    iconUrl: 'https://angular-university.s3-us-west-1.amazonaws.com/course-images/ngrx-v2.png',
    category: 'BEGINNER',
    lessonsCount: 11,
    seqNo: 12,
    url: 'ngrx-course',
    price: 50
  },

  12: {
    id: 12,
    title: 'Angular Testing Course',
    description: 'In-depth guide to Unit Testing and E2E Testing of Angular Applications',
    iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-testing-small.png',
    category: 'BEGINNER',
    lessonsCount: 11,
    seqNo: 13,
    url: 'angular-testing-course',
    price: 50
  },

  26: {
    id: 26,
    title: 'Angular Material In Depth',
    description: 'Build beautiful Angular UIs with the official Material Design component library — theming, tables, dialogs and more',
    iconUrl: 'https://angular-university.s3-us-west-1.amazonaws.com/course-images/angular-material-course-1.jpg',
    category: 'BEGINNER',
    lessonsCount: 11,
    seqNo: 14,
    url: 'angular-material-in-depth-course',
    price: 50
  },

  27: {
    id: 27,
    title: 'Angular SSR In Depth',
    description: 'Master Angular Server-Side Rendering — SSR, pre-rendering, hydration, transfer state and deployment',
    iconUrl: 'https://angular-university.s3-us-west-1.amazonaws.com/course-images/angular-universal-course.jpg',
    category: 'BEGINNER',
    lessonsCount: 11,
    seqNo: 15,
    url: 'angular-ssr-course',
    price: 50
  },

  28: {
    id: 28,
    title: 'Firebase & AngularFire In Depth',
    description: 'Build real-time apps with Firebase and AngularFire — Firestore, Auth, Storage, Cloud Functions',
    iconUrl: 'https://angular-university.s3-us-west-1.amazonaws.com/course-images/firebase-course-1.jpg',
    category: 'BEGINNER',
    lessonsCount: 11,
    seqNo: 16,
    url: 'firebase-angularfire-course',
    price: 50
  },

  14: {
    id: 14,
    title: 'NestJs In Practice (with MongoDB)',
    description: 'Build a modern REST backend using Typescript, MongoDB and the familiar Angular-style API',
    iconUrl: 'https://angular-university.s3-us-west-1.amazonaws.com/course-images/nestjs-v2.png',
    category: 'BEGINNER',
    lessonsCount: 11,
    seqNo: 17,
    url: 'nestjs-course',
    price: 50
  },

  16: {
    id: 16,
    title: 'Stripe Payments In Practice',
    description: 'Build your own ecommerce store & membership website with Firebase, Stripe and Express',
    iconUrl: 'https://angular-university.s3-us-west-1.amazonaws.com/course-images/stripe-course.jpg',
    category: 'BEGINNER',
    lessonsCount: 11,
    seqNo: 18,
    url: 'stripe-course',
    price: 50
  },

  1: {
    id: 1,
    title: 'Serverless Angular with Firebase Course',
    description: 'Serverless Angular with Firestore, Firebase Storage & Hosting, Firebase Cloud Functions & AngularFire',
    iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/serverless-angular-small.png',
    category: 'BEGINNER',
    lessonsCount: 11,
    seqNo: 19,
    url: 'serverless-angular',
    price: 50
  },

  29: {
    id: 29,
    title: 'NgRx In Depth',
    description: 'Deep dive into NgRx — advanced store patterns, effects, selectors, Signal Store and testing strategies',
    iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-ngrx-course.png',
    category: 'BEGINNER',
    lessonsCount: 11,
    seqNo: 20,
    url: 'ngrx-in-depth-course',
    price: 50
  },

  // ── Group 4: Advanced ──────────────────────────────────────────────────────

  6: {
    id: 6,
    title: 'Angular Security Course - Web Security Fundamentals',
    description: 'Learn Web Security Fundamentals and defend an Angular / Node application from XSS, CSRF, JWT attacks and more',
    iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/security-cover-small-v2.png',
    category: 'ADVANCED',
    lessonsCount: 11,
    seqNo: 21,
    url: 'angular-security-course',
    price: 50
  },

  7: {
    id: 7,
    title: 'Angular PWA - Progressive Web Apps Course',
    description: 'Learn Angular Progressive Web Applications — Service Workers, offline mode, push notifications and the Web App Manifest',
    iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-pwa-course.png',
    category: 'ADVANCED',
    lessonsCount: 11,
    seqNo: 22,
    url: 'angular-pwa-course',
    price: 50
  },

  8: {
    id: 8,
    title: 'Angular Advanced Library Laboratory: Build Your Own Library',
    description: 'Learn Advanced Angular functionality used in Library Development — advanced components, directives, CDK, Npm publishing',
    iconUrl: 'https://angular-academy.s3.amazonaws.com/thumbnails/advanced_angular-small-v3.png',
    category: 'ADVANCED',
    lessonsCount: 10,
    seqNo: 23,
    url: 'angular-advanced-course',
    price: 50
  }

};
