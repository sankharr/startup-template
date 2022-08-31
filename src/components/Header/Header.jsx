// packages
import React from "react";

// styling
import "./Header.scss";

// assets
import curveVector from "../../assets/header/curveHeader.png";
import logo from "../../assets/header/logo.png";
import getInTouch from "../../assets/header/Button Get in touch.png";
import headerImage from "../../assets/header/headerImage.png";
import { AiOutlineArrowRight } from "react-icons/ai";

import amazon from "../../assets/header/amazon.png";
import meund from "../../assets/header/meund.png";
import sitepoint from "../../assets/header/sitepoint.png";
import slack from "../../assets/header/slack.png";
import wooCommerce from "../../assets/header/wooCommerce.png";

const partnerArray = [amazon, slack, meund, sitepoint, wooCommerce];


const navBarItems = ["About Us", "Our Service", "The Team", "Portfolio"];

const Header = () => {
  return (
    <div className="Header">
      <img src={curveVector} className="Header__vectorImg" />

      <div className="Header__navbar">
        <img src={logo} className="Header__logo" />
        <div className="Header__navbarSubsection">
          {navBarItems.map((item) => (
            <button className="Header__navbarButtons" key={item}>
              {item}
            </button>
          ))}
          <img src={getInTouch} />
        </div>
      </div>

      <div className="Header__mainSection">
        <div className="Header__mainSectionLeft">
          <p>
            We boost the growth for <span>Startup</span> to Fortune 500
            Companies
          </p>
          <p>
            Get the most accurate leads, sales peopele training and conversions,
            tools and more — all within the same one billing.
          </p>
          <div>
            <input placeholder="Email Address" type="text" />
            <button ><AiOutlineArrowRight /></button>
          </div>
        </div>
        <img src={headerImage} className="Header__mainSectionRight" />
      </div>

      <div className="Header__partnersSection">
        <div>Proud partner at Hubspot & Segment</div>
        {partnerArray.map((item) => 
        <img src={item} key={item} />
        )}
      </div>
    </div>
  );
};

export default Header;
