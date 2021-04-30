import { createSlice } from '@reduxjs/toolkit'; 
import { combineReducers } from 'redux';
import { userRequest } from './actions';

const userDefault = {
    name: '',
    id: '',
    email: '',
    loading: false,
    error: false
};

export const user = createSlice({
    name: 'user',
    initialState: userDefault,
    extraReducers: builder => {
        builder
            .addCase(userRequest.pending, (state, action) => {
                return {
                    ...state,
                    loading: true
                };
            })
            .addCase(userRequest.fulfilled, (state, action) => {
                return {
                    ...state,
                    ...action.payload,
                    loading: false
                };
            })
            .addCase(userRequest.rejected, (state, action) => {
                return {
                    ...state,
                    loading: false,
                    error: true
                };
            })
    }
});

export default combineReducers({
    user: user.reducer
});
