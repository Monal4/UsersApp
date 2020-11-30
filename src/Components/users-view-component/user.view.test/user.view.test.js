import React from 'react';
import { shallow } from "enzyme";
import '../../../setup';
import User from "../usersView.component";

let MockUsers;
let handleInputMock;
let wrapper;
let handlePostmock;

beforeEach(() => {
    MockUsers = [
        {
            id: "1",
            name: "mockUser",
            email: "mockUser@gmail.com",
            address: {
                city: "Cambridge"  
            },
            company: {
                name: "OVC"
            }
        }
    ];
    handlePostmock = jest.fn();
    handleInputMock = jest.fn();
    wrapper = shallow(<User users={MockUsers} handleInput={handleInputMock} handlePost={handlePostmock}/>);
});

describe('it as user view component', () => {

    const body = () => {
        return MockUsers.map(user => {
            return (
                <tr key={user.id} onClick={ () => handlePostmock(user.id)}>
                    <td> {user.name} </td>
                    <td> {user.email} </td>
                    <td> {user.address.city} </td>
                    <td> {user.company.name} </td>
                </tr>
            )
        });
    }

    it('is a snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('is a body snapshot', () => {
        expect(body).toMatchSnapshot();
    });

    it('is a search state test', () => {

        const event = {
            target: {
                value: 'mockUser'
            }
        }
        const input = wrapper.find('input');

        input.simulate('change', event);
        expect(handleInputMock).toHaveBeenCalledWith('mockUser');

        const event2 = {
            target: {
                value: 'mockUser2'
            }
        }

        input.simulate('change', event2);
        expect(handleInputMock).toHaveBeenCalledWith('mockUser2');
    }); 

    it('is a nested table component snapshot', () => {
        const tableComponent = wrapper.find('Table');
        expect(tableComponent).toMatchSnapshot();
    });

});