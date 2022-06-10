import React from "react";
import { Link, NavLink } from "react-router-dom";
import img0 from "./images/App-Store.png";
import img1 from "./images/Google-Play.png";
import img2 from "./images/man and woman.jpg";
import img3 from "./images/dancing.jpg";
import img4 from "./images/investment.jpg";
import img5 from "./images/Tablet-Man.jpg";
import img6 from "./images/wallet.png";
import img7 from "./images/laptop.png";
import img8 from "./images/payment.png";
import colon from "./images/colon.png";
import img9 from "./images/social-media.png";
import copyright from "./images/copyright.png";

const Body1 = () => {
  return (
    <div>
      <div className="trad1">
        <div>
          <h3 className="trad2 p-5 text-light">
            Buy, sell and manage your <br /> Crypto on TradExpress.
          </h3>
          <p className="trad3 text-light">
            Easily Trade Cryptocurrencies like BTC, USDT, ETH, LTC & XRP <br />
            with NGN.
          </p>
          <Link
            to="/individual"
            className="btn3 text-center btn-light btn-lg mt-1 mx-4 justify-content-end"
          >
            Get Started
          </Link>
        </div>

        <img className="images ms-3" src={img8} alt="" height={60} />

        {/* <img src={img1} alt="" /> */}
      </div>

      <div className="trad59 ">
        <h3 className="p-5 text-center">
          Why do people get involved with Cryptocurrencies?
        </h3>

        <div className="container-fluid">
          <div className="trad54 row row-cols-1 row-cols-md-3 g-2">
            <div className="col">
              <div className="card h-60">
                <img src={img2} className="card-img-top" alt="" height={274} />
                <div className="card-body">
                  <h5 className="card-title">Easy Mode of Payment</h5>
                  <p className="card-text">
                    People can now easily send and receive money
                    <br /> from anywhere in the world to purchase goods and
                    <br />
                    pay for services.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-60">
                <img src={img3} className="card-img-top" alt="" height={255} />
                <div className="card-body">
                  <h5 className="card-title">Financial Freedom</h5>
                  <p className="card-text">
                    Just like the internet no single entity controls the
                    <br /> Crypto network which provides users transparency
                    <br /> and privacy, which puts you in absolute control of
                    <br />
                    your money.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-60">
                <img src={img4} class="card-img-top" alt="" height={274} />
                <div className="card-body">
                  <h5 className="card-title">Investment</h5>
                  <p className="card-text">
                    The constant demand as made Cryptocurrecies a<br /> Digital
                    Gold used for alternative store of wealth on
                    <br /> long term investments.
                  </p>
                </div>
              </div>
            </div>
            <div className=" p-3 ">
              <Link
                to="#"
                className="trad55 border border-1 border-dark btn btn-lg "
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        <h3 className="text-center p-5">
          Buy and Sell your Cryptocurrency in 3 simple steps
        </h3>

        <div>
          <div className="trad56">
            <div className="trad60">
              <h3>Create a free account</h3>
              <p>
                Sign up for your free TradExpress Wallet on web, iOS, or Android
                devices and follow our
                <br /> easy process to set up your profile.
              </p>
            </div>

            <div className="trad63">
              <img src={img5} alt="" height={150} />
            </div>
          </div>

          <div className="trad57 mt-5">
            <div className="trad64">
              <img src={img6} alt="" height={150} />
            </div>

            <div className="trad61">
              <h3>Deposit</h3>
              <p>
                Choose your preferred deposit option like bank transfer,
                credit/debit card
                <br />
                or send digital asset directly to your wallet for easy
                funding/withdrawal.
              </p>
            </div>
          </div>

          <div className="trad58 mt-5 ">
            <div className="trad62 ">
              <h3 className="p-4">Buy/ Sell Crypto</h3>
              <p>
                Buy BTC, USDT, ETH, LTC, XRP, DOGE and securely store it
                <br /> in your wallet or send it easily to friends and family.
              </p>
            </div>

            <div className="trad65">
              <img src={img7} alt="" height={150} />
            </div>
          </div>
        </div>
      </div>

      <div className="text-center p-5">
        <p className="pt-5">
          Ready to trade Buy/Sell cryptocurrencies in just 10 minutes?
        </p>
        <h3 className="">
          Create your account for free and start trading today!
        </h3>
        <div className="p-4">
          <Link
            to="/individual"
            className="trad66 btn-dark text-center text-light btn-lg mt-1 mx-4 "
          >
            Get Started
          </Link>
        </div>
        <img src={img8} alt="" width={200} />
      </div>

      <div className="trad74">
        <h3 className="text-center p-5 ">Customer's Review</h3>
        <div className="trad73 ">
          <div className="trad67">
            <img src={colon} alt="" height={10} />
            <p className="trad70 text-light">
              Trading on TradExpress mobile & web
              <br /> platforms has been a smooth
              <br /> experience for me quite easy to
              <br /> navigate.
            </p>
          </div>

          <div className="trad68">
            <img src={colon} alt="" height={10} />
            <p className="trad71 text-light">
              They have the best rate compared to
              <br /> other platforms with fast payout.
            </p>
          </div>

          <div className="trad69">
            <img src={colon} alt="" height={10} />
            <p className="trad72 text-light">
              Easy to fund and withdraw coins or cash
              <br /> on their platform,
              <br /> I will definitely trade with them again.
            </p>
          </div>
        </div>
      </div>
      <footer className="p-5">
        <div>
          <h3>Products</h3>
          <p className="trad75">
            <Link to="">
              Bitcoin
              <br />
              <br />
            </Link>
            <Link to="">
              Alt
              <br />
              <br />
            </Link>
            <Link to="">
              Fiat
              <br />
              <br />
            </Link>
            <Link to="">
              Refill
              <br />
              <br />
            </Link>
            <Link to="">
              P2P
              <br />
              <br />
            </Link>
          </p>
        </div>

        <div>
          <h3>Learn</h3>
          <p className="trad76">
            <Link to="">
              Blog
              <br />
              <br />
            </Link>
            <Link to="">
              Help Center
              <br />
              <br />
            </Link>
          </p>
        </div>

        <div>
          <h3>Contact</h3>
          <p className="trad77">
            <Link to="">
              hello@tradeexpress.com
              <br />
              <br />
            </Link>
            <Link to="">
              support@tradeexpress.com
              <br />
              <br />
            </Link>
          </p>
          <img className="trad80" src={img9} alt="" height={10} />
        </div>

        <div>
          <h3>Company</h3>
          <p className="trad78">
            <Link to="">
              About Us
              <br />
              <br />
            </Link>
            <Link to="">
              Careers
              <br />
              <br />
            </Link>
            <Link to="">
              Rates
              <br />
              <br />
            </Link>
            <Link to="">
              Mobile
              <br />
              <br />
            </Link>
          </p>
        </div>

        <div>
          <h3>Legal</h3>
          <p className="trad79">
            <Link to="">
              Privacy Policy
              <br />
              <br />
            </Link>
            <Link to="">
              Anti-Money Laundering
              <br />
              <br />
            </Link>
            <Link to="">
              Terms and Conditions
              <br />
              <br />
            </Link>
          </p>
        </div>
      </footer>

      <div className="trad81 p-2">
        <img src={copyright} alt="" height={20} />
        <p className="ms-2">
          2021 TradeExpress Technologies All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Body1;
