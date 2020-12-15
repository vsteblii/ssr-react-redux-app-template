import '@babel/polyfill';
import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';

const app = express();
const port = 3001;

app.use(express.static('public'));

app.get('*', (req, res) => {
    const store = createStore();

    console.log(matchRoutes(Routes, req.path));

    res.send(renderer(req, store));
});

app.listen(port, () => {
    console.log(`Listening on port: ${port};`);
    console.log(`ENV: ${process.env.NODE_ENV};`);
});
