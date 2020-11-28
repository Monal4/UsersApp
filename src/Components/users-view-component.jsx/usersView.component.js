import React, {  useState, useEffect } from 'react'
import './usersView.css'
import { useHistory } from 'react-router-dom'
import Table from '../Table/Table'

 const Users = ( { users, searchField, handleInput } ) => {

    const history = useHistory();

    const header = ["Name","Email","City","Company"];

    const body = users.map(user => {
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
                    onChange={event => handleInput(event.target.value)}
                     / >
            </div>
            <Table headers={header} body={body}/>
        </div>
    )
}


export default Users;