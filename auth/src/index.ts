import express from 'express';
import dotenv from 'dotenv';
import 'express-async-errors';
import cookieSession from 'cookie-session';


if(process.env["NODE_ENV"] === "production"){
  dotenv.config({ "path": "./.env" });
}else{
  dotenv.config({ "path": "./dev.env" });
}

import checkOnEnvVariables from './utils/check-on-env-variables';

import { connectDB } from './config/database';
import globalErrorHandler from './middlewares/global-error-handler.middleware';
import NotFoundRouteError from './errors/not-found-route-error';
import mainRoutes from './routes/index.routes';

const app = express();

app.set('trust proxy', true)

app.use(express.json());

app.use(
  cookieSession({
    signed: false,
    secure: false,
  })
)

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
  checkOnEnvVariables();
  console.log(`Listening on port ${port}`);
});
