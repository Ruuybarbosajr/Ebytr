import express from 'express';
import taskController from '../controllers/task.controller';
import verifyToken from '../../middlewares/verify.token';
import taskValidate from '../../middlewares/task.validate';

const router = express.Router();

router.get('/all', verifyToken, taskController.getAll);

router.get('/:id', verifyToken, taskController.findByFk);

router.put('/update/:id', verifyToken, taskValidate, taskController.update);

router.put('/update/status/:id', verifyToken,  taskValidate, taskController.updateStatus);

router.post('/create', verifyToken,  taskValidate, taskController.create);

router.delete('/delete/:id', verifyToken, taskController.delete);

export default router;