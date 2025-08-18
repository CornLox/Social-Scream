import React from "react";
import "../../styles/back_to_the_top.css";

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    (document.getElementById("back-to-the-top") as HTMLElement).style.display =
      "block";
    (document.getElementById("top-banner") as HTMLElement).style.height =
      "30vh";
    (document.getElementById("top-caption") as HTMLElement).style.top = "12.5%";
    (document.getElementById("menu") as HTMLElement).style.display = "none";
    (document.getElementById("logo") as HTMLElement).style.display = "none";
  } else {
    (document.getElementById("back-to-the-top") as HTMLElement).style.display =
      "none";
    (document.getElementById("top-banner") as HTMLElement).style.height =
      "100vh";
    (document.getElementById("top-caption") as HTMLElement).style.top = "40%";
    (document.getElementById("menu") as HTMLElement).style.display = "block";
    (document.getElementById("logo") as HTMLElement).style.display = "block";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
function BackTotheTop() {
  return (
    <button onClick={topFunction} id="back-to-the-top" title="Back to the top">
      &Lambda;
    </button>
  );
}

export default BackTotheTop;
