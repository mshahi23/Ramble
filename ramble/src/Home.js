import React from 'react'
import Sidebar from './Sidebar';
import Timeline from './Timeline';
import Widgets from './Widgets';
import "./Home.css"

function Home() {
  return (
    <div className='home'>
        {/* Sidebar */}
        <Sidebar/>
        {/* Timeline */}
        <Timeline/>
        {/* Widgets */}
        <Widgets/>
    </div>
  )
}

export default Home