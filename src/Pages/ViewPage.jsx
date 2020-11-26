import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import {getUsers} from '../redux-files/user-reducer/user-actions';
import Users from '../Components/users-view-component.jsx/usersView.component.js';

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

    return(
        <Users users={filteredUsers} searchField={searchField} handleInput={handleInput}/>
    )
}

const mapPropsToState = state => {return {users:state.users.users}};
export default connect(mapPropsToState, {getUsers})(ViewPage);