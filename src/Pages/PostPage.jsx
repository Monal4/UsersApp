import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserPost from '../Components/Users-post-component/userPost.component'

const PostPage = (props) => {
    
    const[data, setData] = useState([]);

    useEffect(() => {
        const report = async () => {
            const response = await axios(`https://jsonplaceholder.typicode.com/posts?userId=`+props.match.params.userId);
            setData(response.data);
        }
        report();
    },[]);

    return(
        <UserPost post={data}/>
    )
}

export default PostPage;