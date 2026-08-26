export interface Course {
  id: number;
  url: string;
  description: string;
  longDescription: string;
  iconUrl: string;
  category: string;
  lessonsCount: number;
  seqNo: number;
  price: number;
}

export interface CourseData {
  description: string;
  longDescription: string;
  category: string;
}

export type CourseCategory = 'beginner' | 'advanced';
