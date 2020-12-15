import HomePage from './pages/HomePage';
import UsersListPage, { loadData as loadUsersData } from './pages/UsersListPage';

export default [
    {
        ...HomePage,
        path: '/',
        exact: true,
    },
    {
        ...UsersListPage,
        path: '/users',
    }
];
