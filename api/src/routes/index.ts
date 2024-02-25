import { Router } from 'express';
import homeRouter from './home.routes';

// Create a new Router instance
const router = Router();

// Mount the routers
router.use('/', homeRouter);

export default router;
