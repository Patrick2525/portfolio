import React, {useState, useRef} from 'react';
import "../styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faSquareEnvelope, faHand } from "@fortawesome/free-solid-svg-icons";



function Header() {
  const [count, setCount] = useState(0);
  const hitBtn = () => {
    setCount(count + 1);
  }

  return (
    <div className='header'>
      <img className='headerImg' src='https://t3.daumcdn.net/thumb/R720x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/guest/image/PMDMIJW8MuTlmn0vnoXpKHp4-QQ.JPG'></img>
      <div className='sidebar'>
        <div className='sidebar-header'>
          <a href="#"><h1 className='sidebar-headerTitle'>Minwoo's Devlog</h1></a>
          <p className=''>welcome to my dev-blog :)</p>
        </div>
        <div className='sidebar-nav'>
          <span>Navigation:</span>
          <ul className='sidebar-menus'>
            <li className='sidebar-menu'><span>Devlog</span></li>
            <li className='sidebar-menu'><span>Github</span></li>
            <li className='sidebar-menu'><span>Posts</span></li>
            <li className='sidebar-menu'><span>SubCategory</span></li>
          </ul>
        </div>
        <div className='sidebar-social'>
          <ul className='sidebar-icons'>
            <li><a className='icon-git' href='#'><FontAwesomeIcon icon={faGithub} className="githunIcon" /></a></li>
            <li><a className='icon-mail' href='#'><FontAwesomeIcon icon={faSquareEnvelope} className="mailIcon" /></a></li>
            <li><a className='icon-youtube' href='#'><FontAwesomeIcon icon={faYoutube} className="youtubeIcon" /></a></li>
            <li><a className='icon-instagram' href='#'><FontAwesomeIcon icon={faInstagram} className="instaIcon" /></a></li>
          </ul>
        </div>
        <div className='sidebar-visitor'>
          <input type="button" value="hits" className='sidebar-hitBtn' onClick={hitBtn}/>
          <span className='count'>{count}</span>
        </div>
      </div>
    </div>
  )
}
export default Header