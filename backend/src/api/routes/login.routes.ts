import express from 'express';
import loginValitade from '../../middlewares/login.valitade';
import loginController from '../controllers/login.controller';

const router = express.Router();

router.post('/', loginValitade, loginController.login);

export default router;