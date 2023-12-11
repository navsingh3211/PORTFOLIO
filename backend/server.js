import express from 'express';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { dirname } from 'path';
import cors from 'cors';
import database from './config/database.js';
const app = express();

/* Get the directory path of the current module */
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path : `${__dirname}/config/config.env`});

app.use(cors());
database();

const port = process.env.APP_PORT;

app.listen(port, () => {
  console.log(`Server is running on port 🔗 ${port}.`);
});

export default app;