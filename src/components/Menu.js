import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import "../styles/Menu.css";

function Menu({title}) {
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/${title}`);
  }
  // useEffect(() => {
  //   handleClick();
  // },)

  return (
    <div className='menu'>
        <div className='menu-title' /*onClick={handleClick()}*/>
          {title}
        </div>
    </div>
  )
}

export default Menu