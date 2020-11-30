import React from 'react';
import { shallow } from "enzyme";
import '../../setup';
import ViewPage from "../ViewPage";

import {Provider} from 'react-redux';
import store from '../../redux-files/store'

describe('View Page Component test', () => {
    
    it('is a snapshot for ViewPage', () => {
        expect( shallow(
            <Provider store={store}>
                <ViewPage/>
            </Provider>
            ) ).toMatchSnapshot();
    });

});