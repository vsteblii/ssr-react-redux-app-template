import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import Routes from './Routes';
import reducers from './reducers';

const middlewares = [thunk];
if (DEVELOPMENT) {
    middlewares.push(createLogger());
}

const store = createStore(reducers, {}, applyMiddleware(...middlewares));

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
