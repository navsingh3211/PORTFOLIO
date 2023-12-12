import jwt from 'jsonwebtoken';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { dirname,join } from 'path';
import { log } from 'console';

/* Get the directory path of the current module */
const __filename = fileURLToPath(import.meta.url);
const __dirname = join(dirname(__filename),'..');
dotenv.config({ path : `${__dirname}/config/config.env`});

const JWT_SECRET_TOKEN = process.env.JWT_SECRET_TOKEN;

/**
 * Generate jwt token for user data
 * data: user data
 * cb: callback function
 */
export const generateToken = (data, cb) => {
  return jwt.sign({ data }, JWT_SECRET_TOKEN,{expiresIn: process.env.TOKEN_EXPIRY});
};