export interface Course {
  id: number;
  title: string;
  description: string;
  iconUrl: string;
  category: string;
  seqNo: number;
  price: number;
}

export type CourseCategory = 'beginner' | 'advanced';
