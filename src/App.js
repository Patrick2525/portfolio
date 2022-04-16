import "./App.css";
import Nav from "./Nav";
import Main from "./Main";
import Header from "./Header";
import Menu from "./Menu";
import Menus from "./Menus";

function App() {
  return (
    <div>
      <Header/>
      <Nav>
        <Menus>
          <Menu title="Devlog"/>
          <Menu title="Github"/>
          <Menu title="Posts"/>
          <Menu title="SubCategory"/>
        </Menus>
      </Nav>

      <Main>
        
      </Main>
    </div>
  );
}

export default App;
