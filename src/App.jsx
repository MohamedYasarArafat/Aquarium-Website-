import "./App.css";
import TopNavbar from "./components/TopNavbar";
import Home from "./components/pages/home";
import Submenu from "./components/sub-menu";

function App() {
  return (
    <>
      <div className="top-nav-bar">
        <TopNavbar />
      </div>
      <div>
        <Submenu />
      </div>
      <div className="home-container">
        <Home />
      </div>
    </>
  );
}

export default App;
