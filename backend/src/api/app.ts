import express from 'express';
import handleError from '../middlewares/handle.error';
import router from './routes';

const app: express.Express = express();

app.use(express.json());

app.use('/user', router.user);

app.use('/login', router.login);

app.use(handleError);

export default app;