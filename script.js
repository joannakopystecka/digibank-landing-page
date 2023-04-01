"use strict";

const nav = document.querySelector(".nav");
const allSection = document.querySelectorAll(".section");
const accBtns = document.querySelectorAll(".accounts__btn");
const accBtnsContainer = document.querySelector(".accounts__btns");
const accContent = document.querySelectorAll(".accounts__content");

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

//Account tabs
accBtnsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".accounts__btn");

  if (!clicked) return;

  accBtns.forEach((b) => b.classList.remove("accounts__btn--active"));
  accContent.forEach((c) => c.classList.remove("accounts__content--active"));

  clicked.classList.add("accounts__btn--active");

  document
    .querySelector(`.accounts__content--${clicked.dataset.tab}`)
    .classList.add("accounts__content--active");
});
