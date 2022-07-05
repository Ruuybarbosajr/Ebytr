import app from './api/app';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`app ruuning on ${PORT}`);
});