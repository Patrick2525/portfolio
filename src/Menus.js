import React from 'react';
import "./Menus.css";

function Menus(props) {
  return (
    <div className='menus'>
        {props.children}
    </div>
  )
}

export default Menus