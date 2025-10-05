import React from "react";
import "../../styles/how_section.css";
import Title from "../parts/Title";
import Modal from "../parts/Modal";
import how_img1 from "../../images/epiclesis.jpg";
import how_img2 from "../../images/initiation-to-the-myths.jpg";
import how_img3 from "../../images/organic-mindset.jpg";
import how_img4 from "../../images/deinon-esti.jpg";
import how_img5 from "../../images/from-ashes-to-hope.jpg";

// while modal is active
function makeBright(el: HTMLElement) {
  el.classList.toggle("bright");
}

function HowSection() {
  return (
    <>
      <section id="how-section">
        <div className="container">
          <Title title="Discography" hrId="how-section-hr" />
          <div className="row justify-content-md-center">
            <div className="col-lg-4 mt-4">
              <Modal
                modal_id="how_img1"
                modal_title="Epiclesis"
                modal_list={[
                  "Spartan Blood 04:05",
                  "Faith 04:15",
                  "Smell the Demon 06:10",
                  "Social Scream 04:34",
                  "New Era 03:35",
                  "Dna Eternal 05:21",
                  "Where the Storm Goes 08:51",
                ]}
                modal_txt="Epiclesis is the debut album by the Greek heavy metal band Social Scream, released in June 2014. It was re-released by New Dream Records in 2016."
                modal_img_front={how_img1}
                modal_img_back={""}
                modal_link="https://social-scream.bandcamp.com/album/epiclesis-432-hz-full-album"
              />
              <div
                onClick={(e) => makeBright(e.currentTarget)}
                className="card card-how rounded-0"
              >
                <img
                  className="card-img-top-how img-fluid rounded-0"
                  src={how_img1}
                  data-bs-toggle="modal"
                  data-bs-target="#how_img1-modal"
                  alt="Card image cap"
                />
                <h2 className="disc-title">Epiclesis</h2>
              </div>
            </div>
            <div className="col-lg-4 mt-4">
              <Modal
                modal_id="how_img2"
                modal_title="Initiation to the Myths"
                modal_list={[
                  "Rainbow of Souls 01:50",
                  "Metal Retaliation 02:53",
                  "Blacksmith 04:59",
                  "Prison of Freedom 05:49",
                  "List of Sins 04:26",
                  "No Faces Reflected 06:19",
                  "Wolf Karma 05:23",
                  "Life Remains 06:05",
                  "Unblood 05:37",
                  "Initiation to the Myths 06:33",
                  "From Ashes To Hope 04:02",
                ]}
                modal_txt="Initiation to the Myths is the second studio album by the Greek heavy metal band Social Scream, released on June 3, 2018."
                modal_img_front={how_img2}
                modal_img_back={""}
                modal_link="https://social-scream.bandcamp.com/album/initiation-to-the-myths-432-hz-full-album"
              />
              <div
                onClick={(e) => makeBright(e.currentTarget)}
                className="card card-how rounded-0"
              >
                <img
                  className="card-img-top-how img-fluid rounded-0"
                  data-bs-toggle="modal"
                  data-bs-target="#how_img2-modal"
                  src={how_img2}
                  alt="Card image cap"
                />
                <h2 className="disc-title">Initiation to the Myths</h2>
              </div>
            </div>
            <div className="col-lg-4 mt-4">
              <Modal
                modal_id="how_img3"
                modal_title="Organic Mindset"
                modal_list={[
                  "Stigmata 01:41",
                  "Connect 04:11",
                  "Insane Sun 04:00",
                  "Truth Divider 03:57",
                  "Days Repeating 04:28",
                  "Hive Of Fire 05:40",
                  "War Demons 05:08",
                  "If I Were The Devil 03:54",
                  "World Of Shadows 04:25",
                  "Taleton 09:59",
                ]}
                modal_txt="Organic Mindset is the third album by the Greek heavy metal band Social Scream, released on March 10, 2020."
                modal_img_front={how_img3}
                modal_img_back={""}
                modal_link="https://social-scream.bandcamp.com/album/organic-mindset-full-album"
              />
              <div
                onClick={(e) => makeBright(e.currentTarget)}
                className="card card-how rounded-0"
              >
                <img
                  className="card-img-top-how img-fluid rounded-0"
                  src={how_img3}
                  data-bs-toggle="modal"
                  data-bs-target="#how_img3-modal"
                  alt="Card image cap"
                />
                <h2 className="disc-title">Organic Mindset</h2>
              </div>
            </div>
            <div className="col-lg-4 mt-4">
              <Modal
                modal_id="how_img4"
                modal_title="Deinon Esti"
                modal_list={[
                  "Inmates 04:14",
                  "In Dispute 04:21",
                  "Frozen in Time 06:42",
                  "Exaggelos 06:40",
                  "No Pain for the Dead 06:31",
                  "Evilivin 09:04",
                  "Luna Dark 06:34",
                  "Lost Angel Falls",
                ]}
                modal_txt="Deinon Esti (ΔΕΙΝΟΝ ΕΣΤΙ) is the title of the fifth album released by the Greek heavy metal band Social Scream. The album was released in 2022."
                modal_img_front={how_img4}
                modal_img_back={""}
                modal_link="https://social-scream.bandcamp.com/album/full-album-2022"
              />
              <div
                onClick={(e) => makeBright(e.currentTarget)}
                className="card card-how rounded-0"
              >
                <img
                  className="card-img-top-how img-fluid rounded-0"
                  src={how_img4}
                  data-bs-toggle="modal"
                  data-bs-target="#how_img4-modal"
                  alt="Card image cap"
                />
                <h2 className="disc-title">Deinon Esti</h2>
              </div>
            </div>
            <div className="col-lg-4 mt-4">
              <Modal
                modal_id="how_img5"
                modal_title="From Ashes To Hope"
                modal_list={[
                  "Spartan Blood 04:06",
                  "Faith 04:15",
                  "Social Scream 04:35",
                  "Smell the Demon 06:10",
                  "DNA Eternal 05:21",
                  "Where the Storm Goes 08:51",
                  "Blacksmith 04:59",
                  "New Era 03:36",
                  "Rainbow of Souls 01:50",
                  "Metal Retaliation 02:53",
                  "Prison of Freedom 05:50",
                  "List of Sins 04:26",
                  "Wolf Karma 05:23",
                  "No Faces Reflected 06:19",
                  "Unblood 05:37",
                  "Initiation to the Myths 06:33",
                  "Life Remains 06:05",
                  "From Ashes to Hope 04:03",
                ]}
                modal_txt="The album was released in 2021."
                modal_img_front={how_img5}
                modal_img_back={""}
                modal_link="https://social-scream.bandcamp.com/album/from-ashes-to-hope-double-album"
              />
              <div
                onClick={(e) => makeBright(e.currentTarget)}
                className="card card-how rounded-0"
              >
                <img
                  className="card-img-top-how img-fluid rounded-0"
                  src={how_img5}
                  data-bs-toggle="modal"
                  data-bs-target="#how_img5-modal"
                  alt="Card image cap"
                />
                <h2 className="disc-title">From Ashes To Hope</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HowSection;
