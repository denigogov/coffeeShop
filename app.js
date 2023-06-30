"use strict";

// setup nav
const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");
const overlay = document.querySelector(".overlay");

// show nav
const openNav = function () {
  navbar.classList.add("showNav");
  overlay.classList.remove("hidden");
  //   navbar.classList.add("overlay");
};

const closeNav = function () {
  navbar.classList.remove("showNav");
  overlay.classList.add("hidden");
};

navBtn.addEventListener("click", openNav);
navClose.addEventListener("click", closeNav);
overlay.addEventListener("click", closeNav);

// Observing the arrow

const arrow = document.querySelector(".fa-arrow-up-long");
const header = document.querySelector(".header");

const arrowFunc = function (entries) {
  const [entry] = entries;

  console.log(entry);

  if (!entry.isIntersecting) {
    arrow.style.display = "block";
  } else arrow.style.display = "none";
};

const headerObserver = new IntersectionObserver(arrowFunc, {
  root: null,
  threshold: 0,
});
headerObserver.observe(header);
