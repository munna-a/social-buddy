import React, { useState, useEffect } from 'react';
import MediaCard from '../Post/Post';
import PrimarySearchAppBar from '../NavBar/NavBar';

const Home = () => {
    const [post, setPost] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPost(data))
        console.log(post)
    },[])
    return (
        <div>
            <PrimarySearchAppBar></PrimarySearchAppBar>
            {
                post.map(post => <MediaCard post = {post}></MediaCard>)
            }
            
        </div>
    );
};

export default Home;