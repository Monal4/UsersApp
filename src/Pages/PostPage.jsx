import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserPost from '../Components/Users-post-component/userPost.component'

const PostPage = (props) => {
    
    const[data, setData] = useState([]);

    async function report() {
        const response = await axios(`https://jsonplaceholder.typicode.com/posts?userId=`+ props.match.params.userId);
        setData(await response.data);
    }

    useEffect(() => {
        report();
    },[]);

    return(
        <UserPost post={data}/>
    )
}

export default PostPage;