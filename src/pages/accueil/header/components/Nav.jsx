import React from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid navmarge">
        <Link className="navbar-brand" to="/">
          John Doe
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars" style={{ color: "#ffffff" }}></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav  ms-auto">
            <li
              className={`nav-item ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              <Link className="nav-link" to="/">
                Accueil
              </Link>
            </li>
            <li
              className={`nav-item ${
                location.pathname === "/services" ? "active" : ""
              }`}
            >
              <Link className="nav-link" to="/services">
                Services
              </Link>
            </li>
            <li
              className={`nav-item ${
                location.pathname === "/realisations" ? "active" : ""
              }`}
            >
              <Link className="nav-link" to="/realisations">
                Réalisations
              </Link>
            </li>
            <li
              className={`nav-item ${
                location.pathname === "/blog" ? "active" : ""
              }`}
            >
              <Link className="nav-link " to="/blog">
                Blog
              </Link>
            </li>
            <li
              className={`nav-item ${
                location.pathname === "/contact" ? "active" : ""
              }`}
            >
              <Link className="nav-link " to="/contact">
                Me contacter
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;