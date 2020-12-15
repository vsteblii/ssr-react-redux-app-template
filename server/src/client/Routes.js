import React from 'react';
import Home from './components/Home';
import UsersList, { loadData as loadUsersData } from './components/UsersList';

export default [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '/users',
        component: UsersList,
        loadData: loadUsersData,
    }
];
