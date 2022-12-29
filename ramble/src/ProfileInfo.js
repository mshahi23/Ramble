import React from 'react';
import {getAuth} from 'firebase/auth'
import { Link } from 'react-router-dom';
import './ProfileInfo.css';
import { Button } from '@material-ui/core';


const ProfileInfo = () => {
    const auth = getAuth();
    const name = auth.currentUser.displayName;
    const email = auth.currentUser.email;
    const pic = auth.currentUser.photoURL;

    return(
        <div className = 'profile'>
        <img className='img'
            style = {{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            bjectFit: "cover",
            border: "4px solid black",
            }} 
            src = {pic}
            alt = ""
            />
        <div className= 'info'>
        <h3 className='fields'>{name}</h3>
        <h3 className='fields'>{email}</h3>
        <h4 className='bio'>This is where your bio shows up</h4>
        </div>
        <Link className='links' to='/edit-profile'> 
        <Button variant = 'outlined' className='edit_button'>Edit Profile</Button>
        </Link>
      </div>  
    )
};

export default ProfileInfo
