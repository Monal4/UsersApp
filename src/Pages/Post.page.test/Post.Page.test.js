import React from 'react';
import { shallow } from "enzyme";
import '../../setup';
import PostPage from "../PostPage";

describe('Post Page Component test', () => {
    
    it('is a snapshot for PostPage', () => {
        expect( shallow(<PostPage/>) ).toMatchSnapshot();
    });

});