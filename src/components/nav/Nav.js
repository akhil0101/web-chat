import React from "react";
import "./nav.css";
import logo from "./../../images/logo.png";

const Nav = () => {
    return (
      <div className="nav">
        <div className="nav__blocks">
          <img src={logo} alt="imagelogo"></img>
        </div>
      </div>
    );
}

export default Nav;