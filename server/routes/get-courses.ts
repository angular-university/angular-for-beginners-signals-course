import { Request, Response } from 'express';
import { COURSES } from '../db-data.js';

const RESPONSE_DELAY_MS = 1500;

export function getCourses(req: Request, res: Response) {
  const courses = Object.values(COURSES).sort((c1, c2) => c1.seqNo - c2.seqNo);

  req.log.info(`Returning ${courses.length} courses`);

  setTimeout(() => res.status(200).json(courses), RESPONSE_DELAY_MS);
}
