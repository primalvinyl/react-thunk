const actionTypes = {
    FETCH_USER_REQUEST: 'FETCH_USER_REQUEST',
    FETCH_USER_SUCCESS: 'FETCH_USER_SUCCESS',
    FETCH_USER_FAILURE: 'FETCH_USER_FAILURE'
};

/* -------------------------- fetch user ------------------------------------- */
export const userDefault = {
    loading: false,
    user: {
        score_reasons: []
    },
    error: null
};

export const userRequest = (data = '') => {
    return (dispatch) => {
        dispatch(fetchUserRequest());
        fetch('http://localhost:8081/twitter/user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "username": data,
                "token": ""
            })
        })
            .then(response => response.json())
            .then(response => dispatch(fetchUserSuccess(response)))
            .catch(error => dispatch(fetchUserFailure(error)));
    };
};

export const fetchUserRequest = () => {
    return {
        type: actionTypes.FETCH_USER_REQUEST
    }
};

export const fetchUserSuccess = (user = userDefault) => {
    return {
        type: actionTypes.FETCH_USER_SUCCESS,
        user
    }
};

export const fetchUserFailure = (error = {}) => {
    return {
        type: actionTypes.FETCH_USER_FAILURE,
        error
    }
};

export default actionTypes;
