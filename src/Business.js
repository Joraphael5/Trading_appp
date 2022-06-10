import React from "react";
import { Link, NavLink } from "react-router-dom";

const Business = () => {
  return (
    <div>
      <h3 className="p-5 text-center">Welcome!</h3>

      <div className="trad32 p-5 text-center">
        <Link to="individual">Individual</Link>
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
            placeholder="Business Name"
            name="Business Name"
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

export default Business;
