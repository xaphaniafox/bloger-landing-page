import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div>Blogr</div>
        <div className="nav-elements">
          <ul>
            <li style={{ backgroundColor: "red" }}>
              <NavLink to="/product">Product</NavLink>
            </li>
            <li>
              <NavLink to="/company">Company</NavLink>
            </li>
            <li>
              <NavLink to="/connect">Connect</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
