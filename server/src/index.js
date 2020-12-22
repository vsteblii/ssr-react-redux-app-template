import '@babel/polyfill';
import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import proxy from 'express-http-proxy';
import getConfig from './config';

const app = express();
const port = 3001;

// todo remove proxy
app.use('/api', proxy(getConfig('API_URL')));
app.use(express.static('public'));

app.get('*', (req, res) => {
    const store = createStore(req);

    const promises = matchRoutes(Routes, req.path).map(({ route }) => {
        return route.loadData ?
            route.loadData(store).catch((err) => {
                // todo think about error handling,
                // do we need to skip errors on backend?
                console.log('==========================================================');
                const baseUrl = err.config ? err.config.baseURL : 'no_base_url';
                const url = err.config ? err.config.url : 'no cofig object in err';
                console.log(`BASEURL: ${baseUrl}, URL: ${url}, MESSAGE: ${err.message}`);
                return null;
            }) :
            null;
    });

    Promise.all(promises).then(() => {
        const context = {};
        const content = renderer(req, store, context);

        if(context.notFound){
            res.status(404);
        }

        res.send(content);
    });
});

app.listen(port, () => {
    console.log(`Listening on port: ${port};`);
    console.log(`ENV: ${process.env.NODE_ENV};`);
});
