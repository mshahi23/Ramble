import React from 'react';
// import RambleText from './RambleText';
import Post from './Post';
import "./Timeline.css";
import { useState, useEffect } from 'react';
import { query, where, collection, doc, deleteDoc, onSnapshot } from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
import {Button} from '@material-ui/core';
import db from "./firebase";
import * as Icons from 'react-feather';
import FlipMove from "react-flip-move";
import ProfileInfo from "./ProfileInfo";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Profile() {

  const auth = getAuth();

  const [posts, setPosts] = useState([]);
  const userPostCollectionRef = collection(db, 'posts');

  useEffect(() => {
    const unsubscribe = onSnapshot(query(userPostCollectionRef, where('id', '==', auth.currentUser.uid),), snapshot => {
      setPosts(snapshot.docs.map(doc => ({id: doc.id, data: doc.data()})))
    })

    return () => {
      unsubscribe()
    }
  }, []);

  function deletePost(id) {
    if (window.confirm("Are you sure you want to delete your Ramble?")) {
      const docRef = doc(db, 'posts', id);
      deleteDoc(docRef).then(()=>console.log("deleted the post")).catch(error=>console.log(error.message));
      toast.success('Ramble Deleted !', {
        position: toast.POSITION.TOP_RIGHT
      }) 
    }
  };

  return (
    <div className='feed'>
      {/* Header */}
      <div className='feed_header'>
        <h2>Profile</h2>
      </div>
      {/* Ramble text box */}
      <ProfileInfo/>
      {/* Posts */}
      <FlipMove>
      {posts.map((post) => (
        <div>
          <Post
            id={post.id}
            username={post.data.username}
            avatar={post.data.avatar}
            title={post.data.title}
            topic={post.data.topic}
            text={post.data.text}
            media={post.data.media}
            time={post.data.time}
          />
          <div className='footer'>
            <Button className='footer_button'><Icons.CornerDownLeft fontSize="small" /></Button>
            <Button className='footer_button'><Icons.Heart fontSize="small"/></Button>
            <Button className='footer_button'><Icons.Edit2 fontSize="small"/></Button>
            <Button onClick={()=>deletePost(post.id)} className='footer_button'><Icons.Trash2 fontSize="small"/></Button>
            <ToastContainer />
          </div>

          </div>
      ))}
      </FlipMove>
    </div>
  )
}

export default Profile