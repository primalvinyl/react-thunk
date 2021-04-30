import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { userRequest } from '../store/actions';
import SearchForm from '../components/SearchForm';

const HomePage = () => {
    const dispatch = useDispatch();
    const userData = useSelector(state => state.user);
    const submitHandler = username => {
        dispatch(userRequest(username))
            .then(unwrapResult)
            .then(result => console.log(result));
    };

    return (
        <div>
            <div>
                <SearchForm submitHandler={submitHandler} />
            </div>
            <div>
                <h1>Result</h1>
                <p>{userData.name}</p>
                <p>{userData.email}</p>
            </div>
        </div>
    );
};

export default HomePage;
