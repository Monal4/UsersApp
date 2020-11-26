import {REQUEST_USERS} from './user-reducer.constants'

const initialState = {
    users:[],
    loading:true
}

export default function(state = initialState, action) {

    switch(action.type){

        case REQUEST_USERS:
            return {
                ...state,
                users:action.payload,
                loading:false
            }
        default: 
            return {
                ...state
            }
    }

}