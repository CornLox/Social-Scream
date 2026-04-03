import React from "react";
import "../../styles/ad_banner.css";

interface Props {
  programme_link: string;
  programme_img: string;
  find_us: string;
}

function ΑdBanner({ programme_link, programme_img, find_us }: Props) {
  return (
    <>
      <div id="ad-section">
        <a className=".ad-link" href={programme_link} target="_blank">
          <div className="ad-txt container">
            <h1>{find_us}</h1>
          </div>

          <div
            className="container-fluid ad-banner"
            style={{ backgroundImage: "url(" + programme_img + ")" }}
          ></div>
        </a>
      </div>
    </>
  );
}

export default ΑdBanner;
