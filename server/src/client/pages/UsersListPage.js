import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as Actions from '../actions';

const loadData = (store) => {
    return store.dispatch(Actions.fetchUsers());
};

const UsersList = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.users.result) || null;
    console.log('USERSSSSS, ',user);

    React.useEffect(() => {
        dispatch(Actions.fetchUsers());
    }, []);

    return (
        <div>{user ? user.id : null}</div>
    );
};

export default {
    component: UsersList,
    loadData,
}
