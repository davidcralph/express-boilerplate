import { Router } from 'express';

const router = Router();

router.get('/', (_req, res) => {
  res.status(200).send('hello');
});

export default router;
