import React, {useState} from 'react'
import "./RambleText.css"
import {Button} from '@material-ui/core';
import db from "./firebase";
import {getAuth} from "firebase/auth"
import {collection, addDoc} from "firebase/firestore"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RambleText() {

  const auth = getAuth()

  let [rambleTitle, setRambleTitle] = useState("");
  let [rambleTopic, setRambleTopic] = useState("");
  let [rambleText, setRambleText] = useState("");
  let [rambleMedia, setRambleMedia] = useState("");

  const sendRamble = (e) => {
    e.preventDefault();

    if(rambleText === '') {
      alert('Fill the Ramble field if you want to ramble!')
      return
    }

    if(rambleTitle === '') {
      rambleTitle = 'Untitled'
    }

    if(rambleTopic === '') {
      rambleTopic = 'No Topic'
    }

    const current = new Date();

    const time = current.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });

    addDoc(collection(db, 'posts'), {
      username: auth.currentUser.displayName,
      text: rambleText,
      avatar: auth.currentUser.photoURL,
      media: rambleMedia,
      topic: rambleTopic,
      title: rambleTitle,
      id: auth.currentUser.uid,
      time: time,
    });

    setRambleText("");
    setRambleMedia("");
    setRambleTopic("");
    setRambleTitle("");

    toast.success('Ramble Sent !', {
      position: toast.POSITION.TOP_RIGHT
    })  

  };

  return (
    <div className='textBox'>
        <form>
            <div className='rambleInput'>
                <input 
                onChange={(e) => setRambleTitle(e.target.value)} 
                value={rambleTitle} 
                className='rambleTitle' placeholder='Add Title' type="text"></input>
                <input
                onChange={(e) => setRambleTopic(e.target.value)} 
                value={rambleTopic} 
                className='rambleTopic' placeholder='Add Topic' type="text"></input>
            </div>
            <input 
            onChange={(e) => setRambleText(e.target.value)} 
            value={rambleText} 
            className='rambleText' placeholder='Ramble about anything' type="text"></input>
            <input 
            onChange={(e) => setRambleMedia(e.target.value)} 
            value={rambleMedia} 
            className='rambleImage' placeholder='Add media URL' type="text"></input>
            <Button onClick={sendRamble} type="submit" className='rambleButton'>Ramble</Button>
            <ToastContainer />
        </form>
    </div>
  )
}

export default RambleText