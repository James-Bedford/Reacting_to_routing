import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="nav nav-pills  d-flex justify-content-center p-3 shadow ">
      <div className="col-12 d-flex">
        <img
          src="https://ghibliapi.herokuapp.com/images/logo.svg"
          alt="logo"
          height="50"
        />
      </div>
      <div class="container">
        <div className="navbar navbar-dark justify-content-end ">
          <NavLink
            to="/"
            className={({ isActive }) => `nav-link ${isActive && "active"}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/films"
            className={({ isActive }) => `nav-link ${isActive && "active"}`}
          >
            Films
          </NavLink>
          <NavLink
            to="/people"
            className={({ isActive }) => `nav-link ${isActive && "active"}`}
          >
            People
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
