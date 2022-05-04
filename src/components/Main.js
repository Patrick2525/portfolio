import React from 'react';
import "../styles/Main.css";
import Devlog from './Devlog';
import Github from './Devlog';
import Posts from './Devlog';
import SubCategory from './Devlog';
import { Link, Routes, Route, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  function handleClick() {
    console.log('작동중!');
    navigate(`/${Devlog}`);
  }


  return (
    <div className="main">
      <div className='content'>
        메인페이지 입니다
        <button onClick={handleClick()}/>
      </div>
    </div>
  )
}

export default Main