import { 
    REQUEST_USERS,
    REQUEST_DECLINED,
    UPDATE_USERS } from './user-reducer.constants'

const initialState = {
    users:[],
    message: '',
    loading:true
}

const userReducer = (state = initialState, action) => {

    switch(action.type){

        case REQUEST_USERS:
            return {
                ...state,
                users:action.payload,
                loading:false
            }
        case REQUEST_DECLINED:
            return {
                ...state,
                message: action.payload,
                loading: false
            }
        case UPDATE_USERS:
            return{
                ...state,
                users: state.users + action.payload ,
                loading: false
            }
        default: 
            return {
                ...state
            }
    }

}

export default userReducer;