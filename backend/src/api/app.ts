import express from 'express';
import router from './routes';

const app: express.Express = express();

app.use(express.json());
app.use('/user', router.user);

export default app;