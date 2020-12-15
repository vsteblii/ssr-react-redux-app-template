import React from 'react';
import UsersList from './UsersListPage';

const Home = () => {
    return (
        <div>Home
            <button onClick={() => console.log('fdfs')}>teststs</button>
            <UsersList/>
        </div>
    );
};

export default {
    component: Home,
}
