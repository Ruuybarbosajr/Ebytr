import express from 'express';
import userController from '../controllers/user.controller';

const router = express.Router();

router.get('/all', userController.getAll);

router.post('/create', userController.create);

export default router;