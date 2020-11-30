import { UPDATE_USERS } from "../user-reducer.constants";
import * as actions from '../user-actions';

describe('it as getUsers Test suite ', () => {
    
    it('is a update users action test', () => {
        const user = {
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

        const expectedAction = {
            type: UPDATE_USERS,
            payload: user
        }
        expect(actions.updateUsers(user)).toEqual(expectedAction);
    })
});