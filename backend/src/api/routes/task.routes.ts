import express from 'express';
import taskController from '../controllers/task.controller';
import verifyToken from '../../middlewares/verify.token';

const router = express.Router();

router.get('/all', verifyToken, taskController.getAll);

router.get('/:id', taskController.findByFk);

router.put('/update', verifyToken, taskController.update);

router.post('/create', verifyToken, taskController.create);

export default router;