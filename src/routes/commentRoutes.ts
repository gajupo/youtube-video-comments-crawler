import { Router } from 'express';
import { getComments } from '../controllers/commentsController';
import { verifyToken } from '../middleware/verifyToken';

const router = Router();

router.get('/:videoId', verifyToken, getComments);

export default router;
