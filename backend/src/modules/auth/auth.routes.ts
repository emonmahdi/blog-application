import { Router } from 'express';
import * as authCtrl from './auth.controller';
import authMiddleware from '../../middlewares/auth.middleware';

const router = Router();

router.post('/register', authCtrl.register);
router.post('/login', authCtrl.login);
router.post('/refresh', authCtrl.refresh);
router.post('/logout', authCtrl.logout);
router.get('/me', authMiddleware, authCtrl.me);

export default router;
