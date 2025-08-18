import React from "react";
import "../../styles/logo_banner.css";
import logo from "..//..//images//social-scream-logo-color.png";

function LogoBanner() {
  return (
    <>
      <a href="./" id="logo" className="w-100">
        <img alt="Alternative text" src={logo} />
        <h2 id="logo-title"></h2>
        <h4 id="logo-subtitle"></h4>
      </a>
    </>
  );
}

export default LogoBanner;
