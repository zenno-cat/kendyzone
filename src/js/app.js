import fancybox from "./modules/fancybox.js";
import calc from "./modules/calc.js";

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".header__burger");
  const nav = document.querySelector(".header__navigation");
  const header = document.querySelector(".header");
  const body = document.body;

  burger.addEventListener("click", () => {
    header.classList.toggle("active");
    body.classList.toggle("active");
    burger.classList.toggle("active");
    nav.classList.toggle("active");
  });

  const links = document.querySelectorAll(".header__link");

  links.forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("active");
      body.classList.remove("active");
      burger.classList.remove("active");
      nav.classList.remove("active");
    });
  });

  const slider = () => {
    try {
      new Swiper(".location__slider", {
        autoplay: true,
        loop: true,
        navigation: {
          nextEl: ".slider__arrow-next",
          prevEl: ".slider__arrow-prev",
        },
        pagination: { el: ".swiper-pagination" },
      });
    } catch (err) {
      console.log(err);
    }
  };

  slider();

  fancybox();
  calc();

  const questions = document.querySelectorAll(".ques__top");

  questions.forEach((item) => {
    item.addEventListener("click", () => {
      const icon = item.querySelector(".ques__icon");
      icon.classList.toggle("active");
    });
  });
});
