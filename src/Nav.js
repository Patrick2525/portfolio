import React from 'react';
import "./Nav.css";

function Nav(props) {
  return (
    <div className="nav">
        <span className='barIcon'>bar</span>
        {props.children}
        <span className='barIcon'>search</span>
        {/* <input id='inputSearch' type="text"/> */}
    </div>
  )
}

export default Nav