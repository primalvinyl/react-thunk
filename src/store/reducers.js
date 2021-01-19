import { combineReducers } from 'redux';
import actionTypes, { userDefault } from './actions';

/* -------------------------- reducers ------------------------------------- */
export const user = (state = userDefault, action) => {
    switch (action.type) {
        case actionTypes.FETCH_USER_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.FETCH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.user
            };
        case actionTypes.FETCH_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            };
        default:
            return state;
    }
};

/* ----------------------- root reducer ---------------------------------- */
export default combineReducers({
    user
});