import React from 'react';
import "./Menu.css";

function Menu({title}) {
  return (
    <div className='menu'>
        <div className='menu-title'>
            {title}
        </div>
        
    </div>
  )
}

export default Menu