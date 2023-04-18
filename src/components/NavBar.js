import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img
            style={{ width: "30px", borderRadius: "50%", marginTop: "-5px" }}
            src="data:image/jpeg;base64,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"
            alt=""
          />
          LazyBee
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Business">
                Business
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Entertainment">
                Entertainment
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Health">
                Health
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Science">
                Science
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Sports">
                Sports
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Technology">
                Technology
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
