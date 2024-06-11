import express from 'express';
import morgan from 'morgan';
import { config } from 'dotenv';
import Routes from './routes/index.js';
import db from './config/db.js';

config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).json({ msg: 'home page' });
});

try {
  db();
  app.use('/api', Routes);

  app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
  });
} catch (err) {
  console.error(err.message);
}
