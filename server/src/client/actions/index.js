export const FETCH_USERS = 'fetch_users';

export const fetchUsers = () => async (dispatch, getState, request) => {
    const res = await request.get('/api/v1/user/1');

    dispatch({
        type: FETCH_USERS,
        payload: res,
    });
}
