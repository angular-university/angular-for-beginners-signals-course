export interface Course {
  id: number;
  description: string;
  longDescription: string;
  iconUrl: string;
  category: string;
  seqNo: number;
  price: number;
}

export type CourseCategory = 'beginner' | 'advanced';
