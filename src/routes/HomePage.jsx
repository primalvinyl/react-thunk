import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userRequestThunk } from '../store/actions';
import Form from '../components/Form';

const HomePage = () => {
    const dispatch = useDispatch();
    const userData = useSelector(state => state.user);

    React.useEffect(() => {
        dispatch(userRequestThunk('test'));
    }, [dispatch]);

    const reasonList = userData.result.list.map(element => {
        return (
            <li key={element}>{element}</li>
        );
    })

    return (
        <div>
            <div>
                <Form screenName={userData.result.screen_name} />
            </div>
            <div>
                <h1>Result</h1>
                <p>{userData.result.name}</p>
                <h2>Reasons</h2>
                <ul>
                    {reasonList}
                </ul>
            </div>
        </div>
    );
};

export default HomePage;
