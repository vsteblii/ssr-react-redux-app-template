import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../../client/reducers';
import createInstance from './request';

export default (req) => {
    const requestInstance = createInstance(req);
    const middlewares = [thunk.withExtraArgument(requestInstance)];
    const store = createStore(reducers, {}, applyMiddleware(...middlewares));

    return store;
};
