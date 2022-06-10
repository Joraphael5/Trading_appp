import React from "react";
import { Link, NavLink } from "react-router-dom";
import img0 from "./images/TradExpress.svg";
import img1 from "./images/Google-Play.png";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand text-light fs-6" to="/">
            <img src={img0} alt="" height={30} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <Link
                className="nav-link active text-light fs-6 me-5 "
                aria-current="page"
                to="/buy"
              >
                Instant Buy/Sell
              </Link>
              <a className="nav-link text-light fs-6 me-3" href="">
                Learn
              </a>
              <Link
                to="/welcome"
                className="btn1 btn-info text-center text-light btn-lg mt-1 mx-4"
              >
                Login
              </Link>
              <Link
                to="/individual"
                className="btn2 text-center btn-light btn-lg mt-1 mx-4 justify-content-end"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
