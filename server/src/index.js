import express from 'express';
import renderer from './helpers/renderer';

const app = express();
const port = 3001;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(renderer(req));
});

app.listen(port, () => {
    console.log(`Listening on port: ${port};`);
    console.log(`ENV: ${process.env.NODE_ENV};`);
});
