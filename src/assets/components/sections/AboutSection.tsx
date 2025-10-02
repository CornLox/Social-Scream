import React from "react";
import "../../styles/about_section.css";
import Title from "../parts/Title";
import band1 from "../../images/band1.jpg";
import band2 from "../../images/band2.jpg";

function AboutSection() {
  return (
    <>
      <section id="about-section">
        <div className="container">
          <Title title="History" hrId="about-section-hr" />
          <div className="row img-row">
            <div className="d-none d-lg-block col-5" id="band1-col">
              <img className="img-fluid" src={band1} alt="" />
            </div>
            <div className="offset-lg-1 col-lg-6 z-1 z-lg-0 align-self-center txt-col">
              <p>
                Social Scream is a Heavy Metal band from Greece formed in 2008.
                The band at the begining performed as a cover band many live
                shows inside and outside it's hometown. The need for personal
                expression drove Vlasis Diamantakos
                (guitarist/vocalist/songwriter) to lead the band by composing
                and self-releasing the debut album "Epiclesis" in June 2014.
              </p>
              <p>
                The release of ''Epiclesis'' was followed by a release party and
                two headline shows at Athens and Sparta. It also marked the
                partnership with New Dream Records who digitally distributed
                Epiclesis and also released band's 2nd album “Initiation To The
                Myths” at June 2018. Later that year Social Scream with fresh
                line-up dicided to move forward as a 4-piece band and for two
                years did many live shows inside Greece and also finished with
                the recordings of the upcomming album.
              </p>
            </div>
          </div>
          <div className="row img-row">
            <div className="col-lg-6 z-1 z-lg-0 align-self-center txt-col">
              <p>
                In August 2019 the band released the digital single “Truth
                Divider” from the upcoming album “Organic Mindset” which was
                released in March 2020 by Heart Of Steel Records. The album
                gaining great feedback from both press and fans and introduced
                Social Scream to a larger audience. Durring that year, the
                global pandemic cancelled all band's live activity. As a result
                the band was focused on studio work and tried to be in touch
                with the metal community via playthrough videos and live
                streams.
              </p>
              <p>
                In January 2021 a double cd collection entitled “From Ashes To
                Hope” will be released by Soman Records, containing re-recorded
                versions of old demos and tracks of the first two band's albums.
                The recordings took place at Think Recording Studios and Dimons
                Studios. Album produced by Dimitris Sakkas and artwork created
                by Giannis Stergiou and dtopgraphics. In March 2022 the band
                announces that a new album is ready to hit the ground in April,
                called " Δεινον Εστί " The recordings took place at Think
                Recording Studios and Dimons Studios. Album produced by Dimitris
                Sakkas and artwork created by Giannis Stergiou and dtopgraphics.
              </p>
            </div>
            <div className="offset-lg-1 d-none d-lg-block col-5" id="band2-col">
              <img className="img-fluid" src={band2} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutSection;
