import express from 'express';
import userController from '../controllers/user.controller';
import verifyToken from '../../middlewares/verify.token';

const router = express.Router();

router.get('/all', userController.getAll);

router.get('/:id', userController.findById);

router.post('/create', verifyToken, userController.create);

export default router;