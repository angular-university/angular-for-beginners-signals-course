export enum CourseCategory {
  BEGINNER = 'BEGINNER',
  ADVANCED = 'ADVANCED',
}

export interface Course {
  id: number;
  title: string;
  description: string;
  iconUrl: string;
  category: CourseCategory;
  seqNo: number;
  price: number;
}
