import React from 'react';
import { shallow } from "enzyme";
import '../../../setup';
import UserPost from "../userPost.component";
import axios from 'axios'

describe('Users post component', () => {

    const TestPost = [
        {
          "userId": 1,
          "id": 1,
          "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }];

    it('is a snapshot for userPost', () => {
        expect(shallow(<UserPost post={TestPost}/>)).toMatchSnapshot();
    });

    it('is a userPost api Test', () => {
        const response =  axios(`https://jsonplaceholder.typicode.com/posts?userId=1`);

        expect(response).not.toBeNull();
    });

});