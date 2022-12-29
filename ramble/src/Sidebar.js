import React from 'react';
import "./Sidebar.css";
import * as Icons from 'react-feather';
import SidebarOption from './SidebarOption';
import {getAuth, signOut} from "firebase/auth"
import {Link, useNavigate} from 'react-router-dom'
import {Button} from '@material-ui/core';
import logo from './Assets/logo.png';
import Popup from 'reactjs-popup';
import RambleText from './RambleText';

function Sidebar() {

  const auth = getAuth();
  const navigate = useNavigate();

  const LogOut = () => {
    signOut(auth).then(() => {
        navigate('/')
    })
    .catch((error) => {
        alert(error.code)
    });   
}
    
  return (
    <div className='sidebar'>
        {/* <h1 className='title'>Ramble</h1> */}
        <Link className='links' to='/home'>
        <img src={logo} alt="Ramble logo" width="300" height="66"/>
        </Link>

        <Link className='links' to='/home'>
        <SidebarOption Icon = {Icons.Home} text="Home" /> 
        </Link>

        <Link className='links' to='/topics'>
        <SidebarOption Icon = {Icons.Hash} text="Topics" /> 
        </Link>

        <Link className='links' to='/profile'> 
        <SidebarOption Icon = {Icons.User} text="Profile" />  
        </Link>

        <Popup trigger={<Button variant='outlined' className='sidebar_ramble' fullWidth> Ramble </Button>}>
          <RambleText/>
        </Popup>
        
        <Button variant='outlined' className='sidebar_logout' onClick = {LogOut}><Icons.LogOut/></Button>
    </div>
  )
}

export default Sidebar