import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();

// middleware
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

// connect to mongoDB and authenticateUser
import connectDB from './db/connect.js';
import authRouter from './routes/authRoutes.js';
import jobRouter from './routes/jobsRoutes.js';

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('api is running');
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', jobRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port} ...`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
