import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

import {Provider} from 'react-redux';
import store from './redux-files/store'

test('renders learn react link', () => {
    const component = renderer.create(
        <Provider store={store}>
            <App/>
        </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
