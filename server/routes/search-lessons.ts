import { Request, Response } from 'express';
import { LESSONS } from '../db-data.js';

export function searchLessons(req: Request, res: Response) {
  const courseId = Number(req.query['courseId']);
  const filter = (req.query['filter'] as string) ?? '';
  const sortOrder = (req.query['sortOrder'] as string) ?? 'asc';
  const pageNumber = Number(req.query['pageNumber']) || 0;
  const pageSize = Number(req.query['pageSize']) || 3;

  let lessons = Object.values(LESSONS)
    .filter(lesson => lesson.courseId === courseId)
    .sort((l1, l2) => l1.seqNo - l2.seqNo);

  if (filter) {
    lessons = lessons.filter(lesson =>
      lesson.description.toLowerCase().includes(filter.toLowerCase())
    );
  }

  if (sortOrder === 'desc') {
    lessons = lessons.reverse();
  }

  const start = pageNumber * pageSize;
  const lessonsPage = lessons.slice(start, start + pageSize);

  req.log.info(
    `Returning ${lessonsPage.length} lessons for course ${courseId}, page ${pageNumber}`
  );

  res.status(200).json({ payload: lessonsPage });
}
