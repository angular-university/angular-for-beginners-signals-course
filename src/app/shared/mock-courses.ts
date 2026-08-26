import { Course } from '../model/course';

export const MOCK_COURSES: Course[] = [
  {
    id: 23,
    title: 'Angular For Beginners (Signals Edition)',
    description: 'Learn Angular from scratch using the new Signals API — build real apps with the modern Angular paradigm',
    iconUrl: 'https://d3vigmphadbn9b.cloudfront.net/course-images/large-images/angular-for-beginners.jpg',
    category: 'BEGINNER',
    seqNo: 0,
    price: 0,
  },
  {
    id: 24,
    title: 'Angular In Depth (Signals Edition)',
    description: 'A deep dive into Angular internals — change detection, DI, routing, hydration and performance using Signals',
    iconUrl: 'https://d3vigmphadbn9b.cloudfront.net/course-images/large-images/angular-in-depth-with-signals.jpg',
    category: 'BEGINNER',
    seqNo: 1,
    price: 50,
  },
  {
    id: 19,
    title: 'Angular Forms In Depth (Signals Edition)',
    description: 'Build complex enterprise data forms using Angular Signal Forms — the modern, reactive approach',
    iconUrl: 'https://d3vigmphadbn9b.cloudfront.net/course-images/large-images/angular-forms-in-depth.jpg',
    category: 'BEGINNER',
    seqNo: 2,
    price: 50,
  },
  {
    id: 6,
    title: 'Angular Security Course - Web Security Fundamentals',
    description: 'Learn Web Security Fundamentals and defend an Angular / Node application from XSS, CSRF, JWT attacks and more',
    iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/security-cover-small-v2.png',
    category: 'ADVANCED',
    seqNo: 21,
    price: 50,
  },
];
