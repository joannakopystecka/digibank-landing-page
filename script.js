"use strict";

const nav = document.querySelector(".nav");
const allSection = document.querySelectorAll(".section");

//Nav animations
const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector(".nav__logo");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

window.addEventListener("scroll", function () {
  nav.classList.toggle("sticky", window.scrollY > 0);
});

//Reveal section

window.addEventListener("scroll", function () {
  const triggerBottom = window.innerHeight;

  allSection.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("section--reveal");
    } else {
      box.classList.remove("section--reveal");
    }
  });
});
