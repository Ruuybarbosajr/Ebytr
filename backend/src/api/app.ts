import express from 'express';
import router from './routes';

const app: express.Express = express();

app.use('/users', router.user);

export default app;