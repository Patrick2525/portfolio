import React from 'react';
import "./Header.css";

function Header() {
  return (
    <div className='header'>
      {/* <img src=''/> */}
      <div className='sidebar'>
        <div className='sidebar-about'>
          <span>Minwoo's Devlog</span><br/>
          <span>welcome to my dev-blog :)</span>
        </div>
        <div className='sidebar-nav'>
          <span className='sidebar'></span>
          <span>Navigation:</span>
          <ul>
            <li className='sidebar-menu'>About(x)</li>
            <li className='sidebar-menu'>Github(x)</li>
            <li className='sidebar-menu'>Posts</li>
            <li className='sidebar-menu'>(x)</li>
          </ul>
        </div>
        <div className='sidebar-social'>
          <ul>
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