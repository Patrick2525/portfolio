import { useNavigate } from "react-router-dom";
//import { useEffect } from 'react';
import "../styles/Menu.css";
import { Link } from 'react-router-dom';
//import { useHistory } from "react-router-dom";

function Menu({title}) {
  const navigate = useNavigate();
  //const history = useHistory();

  function handleClick() {
    //navigate(`/${title}`);
    
  }
  // useEffect(() => {
  //   handleClick();
  // },)

  return (
    <div className='menu'>
        <div className='menu-title' onClick={() => navigate(`/${title}`)}>
          <Link to={`/${title}`}/>
          {title}
        </div>
    </div>
  )
}

export default Menu