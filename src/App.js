import Nav from "./components/Nav";
import Main from "./components/Main";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Menus from "./components/Menus";
import React from "react";
import Devlog from './components/Devlog';
import Github from './components/Github';
import Posts from './components/Posts';
import SubCategory from './components/SubCategory';
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
