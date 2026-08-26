import express from 'express';
import pinoHttp from 'pino-http';
import { rootRoute } from './routes/root.js';
import { getCourses } from './routes/get-courses.js';
import { saveCourse } from './routes/save-course.js';

const app = express();
const port = 9000;

app.use(pinoHttp());
app.use(express.json());

app.get('/', rootRoute);
app.get('/api/courses', getCourses);
app.put('/api/courses/:id', saveCourse);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
