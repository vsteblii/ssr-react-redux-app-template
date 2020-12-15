import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as Actions from '../actions';

export const loadData = (store) => {
    return store.dispatch(Actions.fetchUsers());
};

const UsersList = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.data) || [];
    console.log('USERSSSSS, ',users);

    React.useEffect(() => {
        dispatch(Actions.fetchUsers());
    }, []);

    return (
        <React.Fragment>
            {users.map((u) => {
                return (
                    <div key={u.id}>{u.firstName}</div>
                );
            })}
        </React.Fragment>
    );
};

export default UsersList;
