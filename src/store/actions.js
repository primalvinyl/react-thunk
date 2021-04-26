/* -------------------------- action types ----------------------------------- */
const actionTypes = {
    FETCH_USER_START: 'FETCH_USER_START',
    FETCH_USER_SUCCESS: 'FETCH_USER_SUCCESS',
    FETCH_USER_FAILURE: 'FETCH_USER_FAILURE'
};




/* ----------------------- default store values ------------------------------ */
export const userDefault = {
    result: {
        name: '',
        screen_name: '',
        list: []
    },
    loading: false,
    error: false
};




/* ------------------------ fetch user actions ------------------------------- */
export const userRequestThunk = (query = '') => {
    return async (dispatch) => {
        dispatch(fetchUserStart());
        try {
            const response = await fetch(`http://localhost:3000/api/user/${query}`);
            const body = await response.json();
            dispatch(fetchUserSuccess(body));
        } catch (error) {
            dispatch(fetchUserFailure(error));
        }
    };
};

export const fetchUserStart = () => {
    return {
        type: actionTypes.FETCH_USER_START
    }
};

export const fetchUserSuccess = (user = userDefault) => {
    return {
        type: actionTypes.FETCH_USER_SUCCESS,
        user
    }
};

export const fetchUserFailure = error => {
    return {
        type: actionTypes.FETCH_USER_FAILURE,
        error
    }
};

export default actionTypes;
