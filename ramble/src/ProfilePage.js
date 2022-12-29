import React from 'react'
import Sidebar from './Sidebar'
import Profile from './Profile'
import Widgets from './Widgets'
import "./ProfilePage.css"

function ProfilePage() {
  return (
    <div className='prof'>
        <Sidebar/>
        <Profile/>
        <Widgets/>
    </div>
  )
}

export default ProfilePage