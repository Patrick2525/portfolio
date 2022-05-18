import React from "react";
import Nav from "./components/Nav";
import Main from "./pages/Main";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Menus from "./components/Menus";

import Devlog from './pages/Devlog';
import Github from './pages/Github';
import Posts from './pages/Posts';
import SubCategory from './pages/SubCategory';

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Nav>
        <Menus>
          <Menu title="Devlog"/>
          <Menu title="Github"/>
          <Menu title="Posts"/>
          <Menu title="SubCategory"/>
        </Menus>
      </Nav>
      <Routes>
        <Route path="/*" element={<Main/>}/>
        <Route path="/Devlog" element={<Devlog/>}/>
        <Route path="/Github" element={<Github/>}/>
        <Route path="/Posts" element={<Posts/>}/>
        <Route path="/SubCategory" element={<SubCategory/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
