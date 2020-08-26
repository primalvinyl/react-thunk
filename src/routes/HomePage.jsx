import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userRequest } from '../actions';
import Form from '../components/Form';

const HomePage = () => {
    const dispatch = useDispatch();
    const userData = useSelector(state => state.user);

    React.useEffect(() => {
        dispatch(userRequest('dingo'));
    }, [dispatch]);

    const reasonList = userData.user.score_reasons.map(element => {
        return (
            <li key={element}>{element}</li>
        );
    })

    return (
        <div>
            <div>
                <Form screenName={userData.user.screen_name} />
            </div>
            <div>
                <h1>Result</h1>
                <p>{ userData.user.name }</p>
                <h2>Reasons</h2>
                <ul>
                    { reasonList }
                </ul>
            </div>
        </div>
    );
};

export default HomePage;
