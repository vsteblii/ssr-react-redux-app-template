export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async (dispatch, getState, request) => {
    const res = await request.get('/api/v1/user/1');

    dispatch({
        type: FETCH_USERS,
        payload: res,
    });
}

export const ANONYMOUSE_LOGIN = 'anonymouse_login';
export const anonymouseLogin = () => async (dispatch, getState, request) => {
    const res = await request.get('/api/v1/login/anonymous');

    dispatch({
        type: ANONYMOUSE_LOGIN,
        payload: res,
    });
}
