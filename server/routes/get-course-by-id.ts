import { Request, Response } from 'express';
import { COURSES } from '../db-data.js';

export function getCourseById(req: Request, res: Response) {
  const courseId = Number(req.params['id']);

  const course = COURSES[courseId];

  if (!course) {
    req.log.warn(`Course not found: ${courseId}`);
    res.status(404).json({ message: `Course not found: ${courseId}` });
    return;
  }

  req.log.info(`Returning course ${courseId}`);

  res.status(200).json(course);
}
