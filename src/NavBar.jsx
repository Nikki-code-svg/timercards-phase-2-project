import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
       <nav className="navbar">
        <NavLink
            to="/"
            className="nav-link">
                Home
         </NavLink>
          <NavLink
             to="./LongTimer"
             className="nav-link">
                Future Timer
          </NavLink>

        </nav>

   );
};
export default NavBar;