import app from './api/app';

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`app ruuning on ${PORT}`);
});