import { envs } from './config/envs';
import express from 'express';
import path from 'path';
import cors from 'cors';
import auth from './routes/Auth';
import { dbConnect } from './dataBase/config';

// Raise the server
const app = express();

// DB connection
dbConnect();

// Public Path
app.use(express.static(`${envs.PUBLIC_PATH}`));

// Read & Parse of the body
app.use(express.json());

//Routes
app.use('/api/auth', auth);

// Listening requires
app.listen(envs.PORT, () =>
  console.log(`Server listening in port ${envs.PORT}`)
);
