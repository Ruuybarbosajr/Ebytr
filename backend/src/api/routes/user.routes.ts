import express from 'express';
import userController from '../controllers/user.controller';
import verifyToken from '../../middlewares/verify.token';
import userValidate from '../../middlewares/user.validate';

const router = express.Router();

router.get('/all', verifyToken, userController.getAll);

router.get('/:id', verifyToken, userController.findById);

router.post('/create', verifyToken, userValidate, userController.create);

export default router;