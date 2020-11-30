import { REQUEST_USERS,REQUEST_DECLINED,UPDATE_USERS } from "../user-reducer.constants";
import userReducer from '../user-reducer';

describe('User reducer test', () => {

    const initialstate = {
        users: [],
        message: '',
        loading: true
    };

    const MockUsers = [
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

    it('is an initial state test', () => {
        expect(userReducer(undefined,{})).toEqual({users: [], message: '', loading: true});
    });

    it('is a successful request test', () => {
        expect(userReducer(initialstate,{
            type: REQUEST_USERS,
            payload: MockUsers
        })).toEqual({users: MockUsers, message: '', loading: false});
    });

    it('is an exception test', () => {
        expect(userReducer(initialstate,{
            type: REQUEST_DECLINED,
            payload: 'An exception has occured'
        })).toEqual({users: [], message: 'An exception has occured', loading: false});
    });
});


describe(' it as update users test' ,() => {
    const initNew = {
        users: [{
            id: "1",
            name: "mockUser",
            email: "mockUser@gmail.com",
            address: {
                city: "Cambridge"  
            },
            company: {
                name: "OVC"
            }
        }],
        message: '',
        loading: true
    };

    const newUser =  {
        id: "2",
        name: "mockUser2",
        email: "mockUser2@gmail.com",
        address: {
            city: "Cambridge"  
        },
        company: {
            name: "OVC"
        }
    };
    it('updating users test', () => {
        expect(userReducer(initNew,{
            type: UPDATE_USERS,
            payload:newUser
        })).toEqual({users: initNew+newUser, 
                        message: '', 
                        loading: false});
    });
})