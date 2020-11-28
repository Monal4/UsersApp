import React from 'react';
import { shallow } from "enzyme";
import '../../../setup';
import renderer from 'react-test-renderer';
import UserPost from "../userPost.component";

describe('Users post component', () => {

    const TestPost = [
        {
          "userId": 1,
          "id": 1,
          "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }];

    it('is a snapshot for userPost', () => {
        const component = renderer.create(<UserPost post={TestPost}/>);
    
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

});