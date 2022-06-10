import React from "react";
import img0 from "./images/good.png";

const Welcome = () => {
  return (
    <div className="text-center">
      <h3 className="text-center p-5">Welcome Back!</h3>

      <div>
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
            placeholder="Password"
            name="Password"
          />
          <br />
          <br />
          <div className="trad47">
            <img src={img0} alt="" height={20} />
            <p className="trad48">Remember Password</p>
            <p className="trad49">Forgot Password?</p>
          </div>

          <div className="p-5">
            <a href="" className="trad41 btn btn-lg  w-50 text-light">
              Log in
            </a>

            <p className="p-3">
              New User ? <span className="trad42">Click here</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Welcome;
