import express from 'express';
import dotenv from 'dotenv';

dotenv.config({"path": "./dev.env"});

const app = express();

app.use(express.json());

app.get('/api/auth/health', (req, res) => {
  res.status(200).send('OK');
});

const port: number = process.env['PORT'] ? parseInt(process.env['PORT']) : 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
