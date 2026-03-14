import express from 'express';
import dotenv from 'dotenv';
import 'express-async-errors';

dotenv.config({ "path": "./dev.env" });
import { connectDB } from './config/database';
import globalErrorHandler from './middlewares/global-error-handler.middleware';
import NotFoundRouteError from './errors/not-found-route-error';
import mainRoutes from './routes/index.routes';

const app = express();

app.use(express.json());

await connectDB()


app.get('/', async (req, res) => {
  res.send('auth api is healthy!');
});

app.use('/api/auth', mainRoutes);

const port: number = process.env['PORT'] ? parseInt(process.env['PORT']) : 8001;

app.all('*', async (req, res, next) => {
  throw new NotFoundRouteError()
});

app.use(globalErrorHandler)

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
