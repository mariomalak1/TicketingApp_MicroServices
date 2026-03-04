import express from 'express';
import dotenv from 'dotenv';
import 'express-async-errors';

dotenv.config({"path": "./dev.env"});

import globalErrorHandler from './middlewares/global-error-handler.middleware';
import mainRoutes from './routes/main.routes';

const app = express();

app.use(express.json());

app.use('/api', mainRoutes);

const port: number = process.env['PORT'] ? parseInt(process.env['PORT']) : 3000;

app.all('*', globalErrorHandler);

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
