import React from "react";
import "../../styles/contact_section.css";
import Title from "../parts/Title";
import jp_logo from "../../images/jp-guitars-logo.jpg";
import rnrt_logo from "../../images/logoRNRT.jpg";

function ContactSection() {
  return (
    <>
      <section id="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12  d-flex mb-4 mb-md-0">
              <Title title="Brothers" hrId="contact-section-hr" />
            </div>
            <div className="col-md-6  justify-content-center d-flex mb-4 mb-md-0 contact-col">
              <a
                target="_blank"
                href="https://giannispappashandm.wixsite.com/jpcustoms/contact"
              >
                <img
                  id="jp-logo"
                  className="img-fluid contact-logo-img"
                  src={jp_logo}
                  alt=""
                />
              </a>
            </div>
            <div className="col-md-6  justify-content-center d-flex mb-4 mb-md-0 contact-col">
              <a target="_blank" href="https://www.rocknroll.town/">
                <img
                  id="jp-logo"
                  className="img-fluid contact-logo-img"
                  src={rnrt_logo}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactSection;
