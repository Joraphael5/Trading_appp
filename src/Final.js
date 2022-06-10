import React from "react";
import img0 from "./images/mailing.svg";

const Final = () => {
  return (
    <div className="trad50 text-center">
      <h4 className="trad 51 p-5">You're Almost In!</h4>
      <h3 className="p-5">Welcome Cynthia</h3>
      <img src={img0} alt="" />
      <p className="trad52 p-5">
        An activation link has been sent to &nbsp;
        <span className="trad42">Ireti4tech@gmail.com</span>
        <br />
        Please click on the link to verify your email and
        <br /> activate your TradExpress account.
      </p>

      <div>
        <a href="#" className="trad41 btn btn-lg  w-50 text-light">
          Continue
        </a>

        <p className="trad53 p-3">
          Didn't get an email? kindly click &nbsp;
          <span className="trad42">resend email</span>
          <br />
          Wrong email supplied? &nbsp;
          <span className="trad42">Edit email address</span>
        </p>
      </div>
    </div>
  );
};

export default Final;
