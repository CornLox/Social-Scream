import React from "react";
import "../../styles/carousel_banner.css";
import slide1 from "../../images/vlassis1.jpg";
import slide2 from "../../images/vlassis2.jpg";
import slide3 from "../../images/vlassis3.jpg";
import slide4 from "../../images/vlassis4.jpg";

function CarouzelBanner() {
  return (
    <>
      <div id="banner" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#banner"
            data-bs-slide-to="0"
            className="carouzel-slide active"
          ></button>
          <button
            type="button"
            data-bs-target="#banner"
            data-bs-slide-to="1"
            className="carouzel-slide"
          ></button>
          <button
            type="button"
            data-bs-target="#banner"
            data-bs-slide-to="2"
            className="carouzel-slide"
          ></button>
          <button
            type="button"
            data-bs-target="#banner"
            data-bs-slide-to="3"
            className="carouzel-slide"
          ></button>
        </div>

        <div id="carousel-banner-inner" className="carousel-inner">
          <div className="carousel-item active">
            <div className="img-wrapper">
              <img src={slide1} alt="first" className="d-block w-100 h-100" />
            </div>
            <div className="carousel-caption">
              <h1></h1>
              {/* <p>Ότι πουν τα παιδιά!</p> */}
            </div>
          </div>
          <div className="carousel-item">
            <div className="img-wrapper">
              <img src={slide2} alt="second" className="d-block w-100 h-100" />
            </div>
            <div className="carousel-caption">
              <h1></h1>
              {/* <p>dolor sit amet, consectetur adipiscing elit</p> */}
            </div>
          </div>
          <div className="carousel-item">
            <div className="img-wrapper">
              <img src={slide3} alt="third" className="d-block w-100 h-100" />
            </div>
            <div className="carousel-caption">
              <h1></h1>
              {/* <p>dolor sit amet, consectetur adipiscing elit</p> */}
            </div>
          </div>
          <div className="carousel-item">
            <div className="img-wrapper">
              <img src={slide4} alt="fourth" className="d-block w-100 h-100" />
            </div>
            <div className="carousel-caption">
              <h1></h1>
              {/* <p>dolor sit amet, consectetur adipiscing elit</p> */}
            </div>
          </div>
        </div>

        {/*  <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#banner"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#banner"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button> */}
      </div>
    </>
  );
}

export default CarouzelBanner;
