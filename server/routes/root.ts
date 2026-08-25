import { Request, Response } from 'express';

export function rootRoute(req: Request, res: Response) {
  res.send(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Angular for Beginners with Signals — Server</title>
    <style>
      body { font-family: sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; background: #ffffff; color: #3b3059; }
      .card { text-align: center; padding: 40px; border: 1px solid #e3e1e8; border-radius: 12px; }
      h1 { margin: 0 0 8px; color: #3b3059; }
      p { margin: 0; color: #626069; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>Server is running</h1>
      <p>Angular for Beginners with Signals — Courses API on port 9000</p>
    </div>
  </body>
</html>`);
}
