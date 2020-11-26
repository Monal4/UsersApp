import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Table from "../Table/Table";

const UserPost = (props) => {

    const[data, setData] = useState([]);

    useEffect(() => {
        const report = async () => {
            const response = await axios(`https://jsonplaceholder.typicode.com/posts?userId=`+props.match.params.userId);
            setData(response.data);
        }
        report();
    },[]);

    const header = ["Title", "Body"];

    const body = data.map ( d => {
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