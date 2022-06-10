import React from "react";
import { Link, NavLink } from "react-router-dom";

const Sell = () => {
  return (
    <div>
      <div className="trad46">
        <h3 className="text-center p-5">Buy/Sell Instantly</h3>

        <div className="trad32 p-5 text-center">
          <Link to="/Buy">Buy</Link>
          <Link to="/Sell">&nbsp;Sell </Link>
        </div>
        <div className="text-center">
          <form className="trad34 p-2" action="">
            <h3 className="trad43">Coin to Sell</h3>
            <input
              className="trad35"
              type="text"
              placeholder="Bitcoin (BTC)"
              name="Bitcoin (BTC) "
            />
            {/* 
            <i className="caret bi bi-caret-down me-3"> </i> */}

            <br />
            <br />

            <h3 className="trad44">Currency</h3>
            <input
              className="trad36"
              type="text"
              placeholder="Naira (NGN)"
              name="Naira (NGN)"
            />
            <br />
            <br />

            <h3 className="trad45">Quantity</h3>
            <input
              className="trad37"
              type="text"
              placeholder="USD|10,000.00"
              name="NGN|10,000.00"
            />
            <br />
            <br />

            <a href="#" className="trad41 btn btn-lg  w-50 text-light">
              Continue
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sell;
