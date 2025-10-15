import React from "react";
import "../../styles/footer.css";
import Copyright from "../parts/Copyright";
import ContactList from "../parts/ContactList";
import footerLogo from "../../images/logo-bandcamp.png";

function Footer() {
  return (
    <>
      <section id="footer">
        {/* <div className="wave">
          <svg
            viewBox="0 -20 700 60"
            width="100%"
            height="60"
            preserveAspectRatio="none"
          >
            <path d="M0,10 c80,-18 230,-12 350,7 c80,13 260,17 350,-5 v100 h-700z" />
          </svg>
        </div> */}
        <div className="container">
          <div className="row justify-content-around mb-5">
            <div className="col-12 justify-content-center justify-content-md-start d-flex pb-3 pb-md-0 ">
              <a href="./">
                <img src={footerLogo} alt="" className="footer-logo-img" />
                <h2 id="footer-logo-title"></h2>
                <h4 id="footer-logo-subtitle"></h4>
              </a>
            </div>

            <div className="col-12 col-md-4 col-lg-4 flex-column d-flex">
              <ContactList
                title="Contact"
                items={[
                  // socials (open in new tab automatically)
                  {
                    text: "BC @Social-Scream",
                    href: "https://social-scream.bandcamp.com/",
                  },
                  {
                    text: "SPOT @SocialScream",
                    href: "https://open.spotify.com/artist/7lm26XvgzZodwin0fMtgaT?si=VMK6As0zRbCiNbsTXwP98w",
                  },

                  {
                    text: "YT @socialscreamgroup",
                    href: "https://www.youtube.com/@socialscreamgroup",
                  },
                ]}
              />
            </div>
            <div className="col-12 col-md-4 col-lg-4 flex-column d-flex">
              <ContactList
                title="Contact"
                items={[
                  // socials (open in new tab automatically)
                  {
                    text: "IN @socialscreamofficial",
                    href: "https://www.instagram.com/socialscreamofficial/",
                  },

                  {
                    text: "FB @SocialScream",
                    href: "www.facebook.com/SocialScream",
                  },
                  {
                    text: "X socialscream_gr",
                    href: "https://x.com/socialscream_gr/",
                  },
                ]}
              />
            </div>
          </div>
          <Copyright
            name="Social Scream"
            dev_name="Corn Lox"
            dev_link="https://www.linkedin.com/in/georgios-giannakas-843b18203/"
          />
        </div>
      </section>
    </>
  );
}

export default Footer;
