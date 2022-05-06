import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import "../styles/Menu.css";

function Menu({title}) {
  const navigate = useNavigate();

  return (
    <div className='menu' onClick={() => navigate(`/${title}`)}>
        <div className='menu-title'>
          {title}
        </div>
    </div>
  )
}

export default Menu