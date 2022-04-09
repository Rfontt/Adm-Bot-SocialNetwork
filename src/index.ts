import express from 'express';
import route from './routes/routes';

const app = express();

app.use(express.json());
app.use(route);

app.listen(8080, () => { console.log('Server running in localhost:8080') });