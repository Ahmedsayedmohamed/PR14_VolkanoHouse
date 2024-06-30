// Auto complete jQuery codes
/// <reference types="./@types/jquery" />

// for more pure js
"use strict";

/*===========================================================
 Global Variables  
 ============================================================*/

// Get the button:
let myButton = document.getElementById("myBtn");

/*===========================================================
 When start   
 ============================================================*/
document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("#loader").style.visibility = "visible";
  } else {
    document.querySelector("#loader").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
  }
};

/*===========================================================
 Events  
 ============================================================*/

/*===========================================================
 Functions  
 ============================================================*/

$(".slider").owlCarousel({
  items: 1,
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000,
  smartSpeed: 1500,
  margin: 5,
});

$(".ClientSliderr").owlCarousel({
  items: 7,
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000,
  smartSpeed: 1000,
  margin: 10,
  dots: false,
});

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

const obj = document.getElementById("value");
animateValue(obj, 0, 2584, 9000);

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/*===========================================================
 Validations  
 ============================================================*/
