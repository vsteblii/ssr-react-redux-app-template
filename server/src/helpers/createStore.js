import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../client/reducers';

const middlewares = [thunk];
export default () => {
    const store = createStore(reducers, {}, applyMiddleware(...middlewares));

    return store;
};
