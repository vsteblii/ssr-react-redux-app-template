import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as Actions from '../actions';

export const loadData = () => {
    console.log('loading....');
};

const UsersList = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);
    console.log(users);
    React.useEffect(() => {
        dispatch(Actions.fetchUsers());
    }, []);

    return (
        <div>
            users
        </div>
    );
};

export default UsersList;
