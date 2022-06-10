import React from "react";
import { Link, NavLink } from "react-router-dom";

const Individual = () => {
  return (
    <div>
      {/* <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand text-light fs-6" href="#">
            TRAD<b>E</b>XpRESS
          </a>
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
              <a
                className="nav-link active text-light fs-6 me-5 "
                aria-current="page"
                href=""
              >
                Instant Buy/Sell
              </a>
              <a className="nav-link text-light fs-6 me-3" href="">
                Learn
              </a>
              <a
                href=""
                className="btn1 btn-info text-center text-light btn-lg mt-1 mx-4"
              >
                Login
              </a>
              <a
                href=""
                className="btn2 text-center btn-light btn-lg mt-1 mx-4 justify-content-end"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav> */}

      <h3 className="p-5 text-center">Welcome!</h3>

      <div className="trad32 p-5 text-center">
        <Link to="/individual">Individual</Link>
        <Link to="/business">&nbsp; Business</Link>
      </div>

      <div className="trad33 p-5 text-center container-fluid">
        <form className="trad34 p-2" action="">
          <input
            className="trad35"
            type="text"
            placeholder="Username"
            name="Username"
          />
          <br />
          <br />

          <input
            className="trad36"
            type="text"
            placeholder="Full Name"
            name="Full Name"
          />
          <br />
          <br />

          <input
            className="trad37"
            type="text"
            placeholder="Email"
            name="Email"
          />
          <br />
          <br />

          <input
            className="trad38"
            type="text"
            placeholder="Phone Number"
            name="Phone Number"
          />
          <br />
          <br />

          <input
            className="trad39"
            type="text"
            placeholder="Referral Code (optional)"
            name="Referral Code (optional)"
          />
          <br />
          <br />

          <p>
            By clicking the Sign Up button below, you agree to
            <br /> TradExpress &nbsp;{" "}
            <span className="trad40">terms and service</span>
          </p>

          <Link to="/final" className="trad41 btn btn-lg  w-50 text-light">
            Sign Up
          </Link>

          <p>
            Already have an account ? <span className="trad42">Click here</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Individual;
