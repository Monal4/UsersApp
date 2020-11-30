import React, {  useState, useEffect } from 'react'
import './usersView.css'
import Table from '../Table/Table'

 const Users = ( { users, handleInput, handlePost } ) => {

    const header = ["Name","Email","City","Company"];

    const body = () => {
        return users.map(user => {
            return (
                <tr key={user.id} onClick={ () => handlePost(user.id)}>
                    <td> {user.name} </td>
                    <td> {user.email} </td>
                    <td> {user.address.city} </td>
                    <td> {user.company.name} </td>
                </tr>
            )
        })
    } 

    return (
        <div className="tableDiv">
            <div className="searchBox">
                <input 
                    type='search'
                    placeholder='search Users'
                    onChange={event => handleInput(event.target.value)}
                     / >
            </div>
            <Table headers={header} body={body()}/>
        </div>
    )
}


export default Users;