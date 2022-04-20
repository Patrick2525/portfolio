import Nav from "./components/Nav";
import Main from "./components/Main";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Menus from "./components/Menus";

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
