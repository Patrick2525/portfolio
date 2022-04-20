import React from 'react';
import "../styles/Menu.css";

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