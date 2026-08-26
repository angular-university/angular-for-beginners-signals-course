import { Request, Response } from 'express';
import { COURSES } from '../db-data.js';

export function getCourses(req: Request, res: Response) {
  const courses = Object.values(COURSES);

  req.log.info(`Returning ${courses.length} courses`);

  res.status(200).json(courses);
}
