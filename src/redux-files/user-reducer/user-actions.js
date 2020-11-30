import {REQUEST_USERS, REQUEST_DECLINED,UPDATE_USERS } from './user-reducer.constants'
import axios from 'axios'

export const getUsers = () => async dispatch => {
    
    try{
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users`,{
            responseType: 'application/json'
        });

        dispatch( {
            type: REQUEST_USERS,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: REQUEST_DECLINED,
            payload: e.data,
        })
    }

}

export const updateUsers = (newUser)  => ({
    type: UPDATE_USERS,
    payload: newUser
})