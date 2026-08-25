import { Injectable, signal, inject } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { firstValueFrom } from "rxjs";
import { Course } from "../model/course";
import { Lesson } from "../model/lesson";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private http = inject(HttpClient);

  private courses = signal<Course[]>([]);
  readonly allCourses = this.courses.asReadonly();

  async findCourseById(courseId: number): Promise<Course> {
    return firstValueFrom(
      this.http.get<Course>(`/api/courses/${courseId}`)
    );
  }

  async reloadAllCourses(): Promise<Course[]> {
    const res = await firstValueFrom(
      this.http.get<{ payload: Course[] }>('/api/courses')
    );
    const courses = res.payload;
    this.courses.set(courses);
    return courses;
  }

  async saveCourse(courseId: number, changes: Partial<Course>): Promise<Course> {
    const updatedCourse = await firstValueFrom(
      this.http.put<Course>(`/api/courses/${courseId}`, changes)
    );

    this.courses.update(courses =>
      courses.map(course =>
        course.id === courseId ? { ...course, ...updatedCourse } : course)
    )

    return updatedCourse;
  }

  async findLessons(
    courseId: number,
    filter = '',
    sortOrder = 'asc',
    pageNumber = 0,
    pageSize = 3
  ): Promise<Lesson[]> {
    const params = new HttpParams()
      .set('courseId', courseId.toString())
      .set('filter', filter)
      .set('sortOrder', sortOrder)
      .set('pageNumber', pageNumber.toString())
      .set('pageSize', pageSize.toString());

    const res = await firstValueFrom(
      this.http.get<{ payload: Lesson[] }>(`/api/lessons`, { params })
    );
    return res.payload;
  }
}
