import React from "react";
import "../../styles/copyright.css";
interface Props {
  name: string;
  dev_name: string;
  dev_link: string;
}

const year = new Date().getFullYear();

function Copyright({ name, dev_name, dev_link }: Props) {
  return (
    <div className="row copytright-row">
      <div className=" col-12 justify-content-end  d-flex">
        <div>
          <h6 className="copyright-text">
            © {year} {name}
          </h6>
        </div>
      </div>
      <div className=" col-12 justify-content-end  d-flex">
        <div className="d-flex">
          <h6 className="copyright-text">Created with </h6>
          <h6 id="love"> ♥ </h6>
          <h6 className="copyright-text">
            {" "}
            by <a href={dev_link}>{dev_name}</a>
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Copyright;
