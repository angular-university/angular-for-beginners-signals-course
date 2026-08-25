export interface Course {
  id: number;
  seqNo: number;
  titles: {
    description: string;
    longDescription?: string;
  };
  iconUrl: string;
  courseListIcon?: string;
  category: string;
  lessonsCount: number;
}

export interface CourseData {
  description: string;
  category: string;
  releasedAt: string;
  longDescription: string;
}

export type CourseCategory = 'beginner' | 'advanced';
