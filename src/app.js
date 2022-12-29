import express from 'express';
import employeesRoutes from './v1/routes/employees.route.js';
import swaggerDocsV1 from './v1/swagger.js';
import { PORT } from './config.js';

const API_VERSION = 'v1';
export const API_URL = `/api/${API_VERSION}`;

const app = express();

app.use(express.json());

app.use(API_URL, employeesRoutes);

swaggerDocsV1(app, PORT);

app.use((req, res) => res.sendStatus(404));

export default app;
