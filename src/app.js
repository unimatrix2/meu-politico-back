import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

// Config ENV
dotenv.config();

import MongoConnection from './configs/db.config';
import apiRoutes from './routes/api.routes';
import {handleError, handle404} from './middlewares/errorHandler';

const app = express();

// Setup middlewares
app.use(bodyParser.json());
app.use(cors({ origin: process.env.FRONT_END_URL }));

//Setup Routes
app.use('/api', apiRoutes);

// Setup error handling
app.use(handleError);
app.use(handle404);

// Start Db connection
MongoConnection(process.env.MONGODB_URI);

export default app;