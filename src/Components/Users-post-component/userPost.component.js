import React from 'react'
import Table from "../Table/Table";

const UserPost = ( { post } ) => {

    const header = ["Title", "Body"];

    const body = post.map ( d => {
        return (
            <tr key={d.id}>
                <td>{d.title}</td>
                <td>{d.body}</td>
            </tr>
        )
    });

    return (
        <div className="PostDiv">
            <Table  headers={header} body={body}/>
        </div>
    )
}

export default UserPost;