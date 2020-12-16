import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { renderRoutes } from 'react-router-config';
import Routes from './Routes';
import reducers from './reducers';
import requestInstance from './helpers/request';

const middlewares = [thunk.withExtraArgument(requestInstance)];
if (DEVELOPMENT) {
    middlewares.push(createLogger());
}

const store = createStore(reducers, window.INITIAL_STATE || {}, applyMiddleware(...middlewares));

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
