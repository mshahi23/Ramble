import React from 'react'
import Sidebar from './Sidebar'
import Topics from './Topics'
import Widgets from './Widgets'
import "./TopicsPage.css"

function TopicsPage() {
  return (
    <div className='topics'>
        <Sidebar/>
        <Topics/>
        <Widgets/>
    </div>
  )
}

export default TopicsPage