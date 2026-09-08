export interface Course {
  id: number;
  title: string;
  description: string;
  iconUrl: string;
  category: CourseCategory;
  seqNo: number;
  price: number;
}

export type CourseCategory = 'BEGINNER' | 'ADVANCED';
