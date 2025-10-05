import React from "react";
import "../../styles/ad_banner.css";
import ad_slide from "../../images/truth_divider.jpg";

const programme_link =
  "https://distrokid.com/hyperfollow/socialscream/truth-divider";

const find_us = "";

function ΑdBanner() {
  return (
    <>
      <div id="ad-section">
        <a className=".ad-link" href={programme_link} target="_blank">
          <div className="ad-txt container">
            <h1>{find_us}</h1>
          </div>

          <div
            className="container-fluid ad-banner"
            style={{ backgroundImage: "url(" + ad_slide + ")" }}
          ></div>
        </a>
      </div>
    </>
  );
}

export default ΑdBanner;
