import axios from '../../helpers/request';

export const FETCH_USERS = 'fetch_users';

export const fetchUsers = () => async dispatch => {
    const res = await axios.get('https://dummyapi.io/data/api/user?limit=10');

    dispatch({
        type: FETCH_USERS,
        payload: res,
    });
}
