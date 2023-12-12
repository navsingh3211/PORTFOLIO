import express from 'express';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { dirname } from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
import database from './config/database.js';
import routes from './routes/index.js';
const app = express();

/* Get the directory path of the current module */
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path : `${__dirname}/config/config.env`});

app.use(cors());

/* parse requests of content-type - application/json */
app.use(bodyParser.json());

database();
app.use(routes());

const port = process.env.APP_PORT;

app.listen(port, () => {
  console.log(`Server is running on port 🔗 ${port}.`);
});

export default app;