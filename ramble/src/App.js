import React from 'react';
// import Sidebar from './Sidebar';
// import Timeline from './Timeline';
// import Widgets from './Widgets';
import Home from './Home';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./LogIn"
import Register from './Register';
import EditProfile from './EditProfile';
import ProfilePage from './ProfilePage';
import TopicsPage from './TopicsPage';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path = "/" element = {<Login/>}></Route>
          <Route path = "/home" element = {<Home/>}></Route>
          <Route path = "/register" element = {<Register/>}></Route>
          <Route path = "/edit-profile" element = {<EditProfile/>}></Route> 
          <Route path = "/profile" element = {<ProfilePage/>}></Route>
          <Route path = "/topics" element = {<TopicsPage/>}></Route>  
        </Routes>
      </Router>
    </div>
  );
}

export default App;
