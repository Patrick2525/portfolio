import React from 'react';
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";

function Nav(props) {
  return (
    <div className="nav">
      <div className='nav-static'>
        <span className='barIcon'><a href='#' className="barIcons"><FontAwesomeIcon icon={faBars} className="search" /></a></span>
        {props.children}
        <span className='search'><a href='#' className="searchIcon"><FontAwesomeIcon icon={faSearch} /></a></span>
        <input className='inputSearch' type="text"/>
      </div>
    </div>
  )
}

export default Nav