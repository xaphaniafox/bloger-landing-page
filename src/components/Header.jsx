import "../App.css";
import DesktopBackground from "/svgs/bg-pattern-intro-desktop.svg";

const Header = () => {
  return (
    <div className="header">
      <img className="header--image" src={DesktopBackground} />
    </div>
  );
};

export default Header;
