import { StaticRouter } from 'react-router-dom';
import { ANONYMOUSE_LOGIN } from '../actions';

export default (state = [], action) => {
    switch(action.type){
        case ANONYMOUSE_LOGIN:
            return action.payload.data;
        default:
            return state;
    }
};
