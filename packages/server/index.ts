import express from 'express';
import dotenv from 'dotenv';
import router from './routes';

// loading environment variables
dotenv.config();

// application config
const app = express();
app.use(express.json());
app.use(router);

const port = process.env.PORT || 5000;

// staring application
app.listen(5000, (e) => {
   console.log(`Server is running at http://localhost:${port}`);
});
