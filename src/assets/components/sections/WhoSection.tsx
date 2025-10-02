import React from "react";
import "../../styles/who_section.css";
import Title from "../parts/Title";
import who_img1 from "../../images/vlassis.jpg";
import who_img2 from "../../images/vlassis.jpg";
import who_img3 from "../../images/vlassis.jpg";
import who_img4 from "../../images/vlassis.jpg";

function WhoSection() {
  return (
    <>
      <section id="who-section">
        <div className="container">
          <Title title="Members" hrId="who-section-hr" />
          <div className="row">
            <div className="col-lg-3 col-md-6 mt-4">
              <div className="card card-who rounded-0">
                <img
                  className="card-img-top-who img-fluid rounded-0"
                  src={who_img1}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <p className="card-text">
                    Vlasis Diamantakos <br /> Vocals - Guitar
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-4">
              <div className="card card-who rounded-0">
                <img
                  className="card-img-top-who img-fluid rounded-0"
                  src={who_img2}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <p className="card-text">
                    Vlasis Diamantakos <br /> Vocals - Guitar
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-4">
              <div className="card card-who rounded-0">
                <img
                  className="card-img-top-who img-fluid rounded-0"
                  src={who_img3}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <p className="card-text">
                    Vlasis Diamantakos <br /> Vocals - Guitar
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-4">
              <div className="card card-who rounded-0">
                <img
                  className="card-img-top-who img-fluid rounded-0"
                  src={who_img4}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <p className="card-text">
                    Vlasis Diamantakos <br /> Vocals - Guitar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhoSection;
