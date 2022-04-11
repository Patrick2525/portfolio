import "./App.css";
import Nav from "./Nav";
import Main from "./Main";
import Header from "./Header";
import Menu from "./Menu";
import Menus from "./Menus";

function App() {
  return (
    <>
      <Header/>
      <Nav>
        <Menus>
          <Menu title="About(X)"/>
          <Menu title="Github(X)"/>
          <Menu title="Posts"/>
          <Menu title="(X)"/>
        </Menus>
      </Nav>

      <Main>
        
      </Main>
    </>
  );
}

export default App;
