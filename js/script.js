"use strict";

//Scrolling
const links = document.querySelectorAll("[data-goto]");

links.forEach((link) => {
  link.addEventListener("click", onLinkClick);
});

function onLinkClick(e) {
  const link = e.target;
  if (link.dataset.goto && document.querySelector(link.dataset.goto)) {
    const gotoSection = document.querySelector(link.dataset.goto);
    const sectionValue =
      gotoSection.getBoundingClientRect().top +
      pageYOffset -
      document.querySelector("header").offsetHeight;
    window.scrollTo({
      top: sectionValue,
      behavior: "smooth",
    });
    if (headerMenu.classList.contains("active-menu")) {
      document.body.classList.remove("block-scroll");
      headerMenu.classList.remove("active-menu");
    }
    e.preventDefault();
  }
}

//Burger menu

const burgerMenu = document.querySelector(".menu-burger");
const headerMenu = document.querySelector(".head-menu");

burgerMenu.addEventListener("click", (e) => {
  document.body.classList.toggle("block-scroll");
  headerMenu.classList.toggle("active-menu");
});
