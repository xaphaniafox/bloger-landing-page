import "../App.css";
import Navbar from "./Navbar";
import DesktopBackground from "/svgs/bg-pattern-intro-desktop.svg";
import { BrowserRouter } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      {/* <img className="header--image" src={DesktopBackground} /> */}
    </div>
  );
};

export default Header;
