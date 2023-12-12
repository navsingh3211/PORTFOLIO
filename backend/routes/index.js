import auth from './auth.js';
import express from 'express';
const router = express.Router();

/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/', (req, res) => {
    res.json(
      'Welcome to Inventory,Now You can buy or assign some items to other'
    );
  });
  router.use('/user/auth', auth);

  return router;
};

export default routes;