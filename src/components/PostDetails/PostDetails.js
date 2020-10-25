import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})


const PostDetails = () => {
  const {userId} = useParams();
  const [postDetails, setDetails] = useState({});
  const [postComment, setComments] = useState([]);
  const [photos, setPhotos] = useState({});
  useEffect(()=> {
    fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
    .then(response => response.json())
    .then(userData => setDetails(userData))
  },[]);
  useEffect(()=> {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${userId}`)
    .then(response => response.json())
    .then(comments => setComments(comments))
  },[]);
  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${userId}`)
  //   .then(response => response.json())
  //   .then(photo => setPhotos(photo))
  // },[]);
  //   const userPhoto = photos.map(photo => () {});
  //   console.log(userPhoto)

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const hrStyle = {
    width:'140px',
    borderBottom: '5px solid blue',
    margin: '0 auto',
    marginBottom:'20px'
  }

  return (
    <div>
      <h1>Post Details</h1>
      <div style={hrStyle}></div>
      <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          User ID : {postDetails.userId}
        </Typography>
        <Typography variant="h5" component="h2">
          Post Title : {postDetails.title}
        </Typography>
        <Typography variant="body2" component="p">
          Post : {postDetails.body}
        </Typography>
      </CardContent>
    </Card>
      <h1>Post comments</h1>
       <div style={hrStyle}></div>
      {
        postComment.map(comments => <Comments comments = {comments}></Comments>)
      }


    </div>
  );
};

export default PostDetails;