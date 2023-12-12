import express from 'express';
import {signUp}  from '../controllers/auth.controller.js';



const router = express.Router();

router.post(
  '/signup',
  // [validateToken, isAdmin, inventoryCategoryCreateSchemavalidator],
  signUp
);

export default router;