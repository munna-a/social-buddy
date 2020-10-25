import React from 'react';
import images from '../images/users.jpg'
import   './comment.css'
const Comments = (props) => {
    const {name,email,body,id} = props.comments;
    const cardArea = {
        border: '1px solid black',
        padding : '20px',
        width: '80%',
        margin : '0 auto',
        marginBottom:'20px',
        boxShadow: '0px 0px 23px 10px grey'

    }
    const image = {
        width: '20%',
        float: 'left',
        borderRadius: '50%',
    }
    const comentsArea = {
        width: '70%',
        marginLeft: '200px'
    }
    return (
        <div style={cardArea}>
            <div style={image}>
                <img className="ima" width="150px" src={images} alt=""images/>
            </div>
            <div style={comentsArea}>
                <p>User id : {id}</p>
                <p>Name : {name}</p>
                <p>Email : {email}</p>
                <p><small>{body}</small></p>
            </div>
           
        </div>
    );
};

export default Comments;