import React from "react";
import "../../styles/merch_banner.css";
import merch_slide from "../../images/merchandise.png";

const programme_link = "https://social-scream.bandcamp.com/merch";

const find_us = "";

function MerchBanner() {
  return (
    <>
      <div id="merch-section">
        <a className=".merch-link" href={programme_link} target="_blank">
          {/* <div className="merch-txt container">
            <h1>{find_us}</h1>
          </div> */}

          <div
            className="container-fluid merch-banner"
            style={{ backgroundImage: "url(" + merch_slide + ")" }}
          ></div>
        </a>
      </div>
    </>
  );
}

export default MerchBanner;
