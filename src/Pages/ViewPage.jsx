import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {connect} from 'react-redux';
import {getUsers} from '../redux-files/user-reducer/user-actions';
import Users from '../Components/users-view-component/usersView.component';

const ViewPage = ({getUsers, users}) => {

    const[ searchField, setSearchField] = useState('');

    useEffect(() => {
        getUsers()
    }, [getUsers]);

    const handleInput = (value) => {
        setSearchField(value);
    };

    const filteredUsers = users.filter((user) => (
        user.name.toLowerCase().startsWith(searchField.toLowerCase())    
    ));

    const history = useHistory();

    const handlePost = (id) => {
        history.push("/posts/"+id)
    }

    return(
        <Users users={filteredUsers} handleInput={handleInput} handlePost={handlePost}/>
    )
}

const mapPropsToState = state => {return {users:state.users.users}};
export default connect(mapPropsToState, {getUsers})(ViewPage);