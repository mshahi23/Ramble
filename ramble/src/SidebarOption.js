import React from 'react';
import "./SidebarOption.css";

function SidebarOption({active, text, Icon}) {
  return (
    <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
      <i><Icon/></i>
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption