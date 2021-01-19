import React from 'react';
import Renderer from 'react-test-renderer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../store/reducers';
import Form from '../components/Form';

describe('Footer', () => {
    const store = createStore(rootReducer, {});

    it('matches snapshot', () => {
        const component = Renderer.create(
            <Provider store={store}>
                <Form />
            </Provider>
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
