import React from "react";
import "../../styles/burger_menu.css";

const menuOnClick = () => {
  (document.getElementById("menu-bar") as HTMLElement).classList.toggle(
    "change"
  );
  (document.getElementById("nav") as HTMLElement).classList.toggle("change");
  (document.getElementById("menu-bg") as HTMLElement).classList.toggle(
    "change-bg"
  );
  (
    document.getElementById("carousel-banner-inner") as HTMLElement
  ).classList.toggle("change");
};

function BurgerMenu() {
  return (
    <>
      <div id="menu">
        <div id="menu-bar" onClick={menuOnClick}>
          <div id="bar1" className="bar"></div>
          <div id="bar2" className="bar"></div>
          <div id="bar3" className="bar"></div>
        </div>
        <nav className="nav" id="nav">
          <ul>
            {/* <li>
              <a href="#">Αρχική</a>
            </li> */}
            <li>
              <a href="#about-section">History</a>
            </li>
            <li>
              <a href="#how-section">Discografy</a>
            </li>
            <li>
              <a href="#who-section">Composition</a>
            </li>
            {/* <li>
              <a href="#work-section">Merchandise</a>
            </li> */}
            <li>
              <a href="#footer">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="menu-bg" id="menu-bg"></div>
    </>
  );
}

export default BurgerMenu;
