import { Router, Request, Response } from 'express';

// New Router instance
const router = Router();

// Home routes // TODO: Remove
router.get('/api/test', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default router;
