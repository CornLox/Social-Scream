import React from "react";
import "../../styles/contact_section.css";
import Title from "../parts/Title";
import jp_logo from "../../images/jp-guitars-logo.jpg";
import rnrt_logo from "../../images/logoRNRT.jpg";
import demons_logo from "../../images/demons.jpg";
import think_logo from "../../images/think.jpg";

function ContactSection() {
  return (
    <>
      <section id="contact-section">
        <div className="container">
          <Title title="Brothers" hrId="contact-section-hr" />
          <div className="row">
            <div className="col-md-6 col-lg-3  justify-content-center d-flex mb-4 mb-md-0 contact-col">
              <a target="_blank" href="https://dimonsstudios.com/">
                <img
                  id="demons-logo"
                  className="img-fluid contact-logo-img"
                  src={demons_logo}
                  alt=""
                />
              </a>
            </div>
            <div className="col-md-6 col-lg-3  justify-content-center d-flex mb-4 mb-md-0 contact-col">
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
            <div className="col-md-6 col-lg-3  justify-content-center d-flex mb-4 mb-md-0 contact-col">
              <a target="_blank" href="https://www.rocknroll.town/">
                <img
                  id="jp-logo"
                  className="img-fluid contact-logo-img"
                  src={rnrt_logo}
                  alt=""
                />
              </a>
            </div>
            <div className="col-md-6 col-lg-3  justify-content-center d-flex mb-4 mb-md-0 contact-col">
              <a
                target="_blank"
                href="https://www.instagram.com/thinkrecordingstudio?igshid=1v78a7agjkca8&fbclid=IwY2xjawNY0J1leHRuA2FlbQIxMABicmlkETFxMXNqMXJQeGJtWmhPemxRAR6lowih1qDXphZGGai4cZLSaTRMutyfDD3ey0EYC4EZhEywUDEbvv4hUKpkAA_aem_pPOyfR_MxeEJjvhkymn9uA"
              >
                <img
                  id="think-logo"
                  className="img-fluid contact-logo-img"
                  src={think_logo}
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
