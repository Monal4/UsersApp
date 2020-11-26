import React, {  useState, useEffect } from 'react'
import {connect} from 'react-redux'
import {getUsers} from '../../redux-files/user-reducer/user-actions'
import './usersView.css'
import { useHistory } from 'react-router-dom'
import Table from '../Table/Table'

 const Users = ( { getUsers, users } ) => {

    const[ searchField, setSearchField] = useState('');

    const history = useHistory();

    useEffect(() => {
            getUsers()
    }, [getUsers]);


    const filteredUsers = users.filter((user) => (
        user.name.toLowerCase().startsWith(searchField.toLowerCase())    
    ));

    const header = ["Name","Email","City","Company"];

    const body = filteredUsers.map(user => {
        return (
            <tr key={user.id} onClick={ () => history.push("/posts/"+user.id)}>
                <td> {user.name} </td>
                <td> {user.email} </td>
                <td> {user.address.city} </td>
                <td> {user.company.name} </td>
            </tr>
        )
    });

    return (
        <div className="tableDiv">
            <div className="searchBox">
                <input 
                    type='search'
                    placeholder='search Users'
                    onChange={event => setSearchField(event.target.value)}
                     / >
            </div>
            <Table headers={header} body={body}/>
        </div>
    )
}

const mapPropsToState = state => {return {users:state.users.users}};

export default connect(mapPropsToState,{getUsers})(Users);