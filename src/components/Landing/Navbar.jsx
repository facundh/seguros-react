import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark text-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse text-light mx-2 px-2"
          id="navbarTogglerDemo01"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item py-3 px-4 w-100  ">
              <Link to="/cotizacion" className=" text-light lead">Solicita tu Cotizacion</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
