import React from "react";
import "../../styles/ad_banner.css";
import ad_slide from "../../images/unified.jpg";

const programme_link =
  "https://www.youtube.com/watch?v=QMcPSQ2o-gA&list=RDQMcPSQ2o-gA&start_radio=1";

const find_us = "The Unified Field - Official Video Out Now";

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
