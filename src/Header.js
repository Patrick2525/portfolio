import React from 'react';
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicket } from '@fortawesome/free-solid-svg-icons';
//import { faTwitter } from '@fortawesome/free-brands-svg-icons';

function Header() {

 // FontAwesomeIcon icon = faSearch;

  return (
    <div className='header'>
      <img class='headerImg' src='https://t3.daumcdn.net/thumb/R720x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/guest/image/PMDMIJW8MuTlmn0vnoXpKHp4-QQ.JPG'></img>
      <div className='sidebar'>
        <div className='sidebar-header'>
          <h1 className='sidebar-headerTitle'>Minwoo's Devlog</h1><br/>
          <p className=''>welcome to my dev-blog :)</p>
        </div>
        <div className='sidebar-nav'>
          <span>Navigation:</span>
          <ul className='sidebar-menus'>
            
            <li className='sidebar-menu'><span>About(x)</span></li>
            <li className='sidebar-menu'><span>Github(x)</span></li>
            <li className='sidebar-menu'><span>Posts</span></li>
            <li className='sidebar-menu'><span>(x)</span></li>
          </ul>
        </div>
        <div className='sidebar-social'>
          <ul className='sidebar-icons'>
            {/* <li className='test'><span><FontAwesomeIcon icon={faTwitter} className="search" /></span></li> */}
            <li className='test'><span><FontAwesomeIcon icon={faTicket} className="search" /></span></li>
            <li><a className='icon-github' href='#'>github</a></li>
            <li><a className='icon-mail' href='#'>mail</a></li>
            <li><a className='icon-youtube' href='#'>youtube</a></li>
            <li><a className='icon-instagram' href='#'>insta</a></li>
          </ul>
        </div>
        <div className='sidebar-visitor'>
          <span>방문자수 : </span>
          <span>0</span>
        </div>
      </div>
    </div>
  )
}
export default Header