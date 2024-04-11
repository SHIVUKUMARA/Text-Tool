import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = (props) => {
  const location = useLocation();

  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode}`}
        style={{ backgroundColor: "#84b72994" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="https://img.freepik.com/premium-vector/computer-keyboard-symbol-icon-logoillustration-design-template_757387-2556.jpg"
              alt="log"
              style={{ width: "50px" }}
            />
          </Link>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-bold">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/textform" ? "active" : ""
                  }`}
                  to="/textform"
                >
                  Text Tool
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/textextractor" ? "active" : ""
                  }`}
                  to="/textextractor"
                >
                  Extract Text
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/linkshortener" ? "active" : ""
                  }`}
                  to="/linkshortener"
                >
                  Link Shortener
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/secret" ? "active" : ""
                  }`}
                  to="/secret"
                >
                  Encrypt / Decrypt
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/passwordgenerator" ? "active" : ""
                  }`}
                  to="/passwordgenerator"
                >
                  Password Generator
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
            <div
              className={`form-check form-switch text-${
                props.mode === "dark" ? "light" : "dark"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                <b>
                  {props.mode === "light"
                    ? "Enable Dark Mode"
                    : "Enable Light Mode"}
                </b>
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
