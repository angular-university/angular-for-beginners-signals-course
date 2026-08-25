
## Backend code rules

- the backend uses Node and Express, and runs on localhost:9000.

- to start the backend the user should run npm run server

- there is no persistent database, just in-memory modifiable mock data based on a db-data.ts file

- each Express route should be in a separate file under the /server/routes folder. Make the routes plain express functions, and link them to the url and the HTTP method on server.ts

- there is no authentication and no security middleware: this is a beginners course and security is not covered. Don't add auth, guards, tokens, or user accounts.

- don't use dotenv or .env files. Configuration values are plain constants in the code; the only
  exception is the OpenAI API key, read from the OPENAI_API_KEY environment variable set in the shell.

- use the package pino for logging. Add appropriate logging to all code.

- don't use the OpenAI SDK Node wrapper to interact with their API. Instead, build plain HTTP requests directly.
