// import fancybox from "./modules/fancybox.js";
import calc from "./modules/calc.js";

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".header__burger");
  const nav = document.querySelector(".header__navigation");
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
  });
  // const overlay = document.querySelector(".overlay");
  // const intro = document.querySelector(".intro");
  // const navLinks = document.querySelectorAll('.nav__link');
  // navLinks.forEach(lnk => {
  // 	lnk.addEventListener('click', () => {
  // 		try {
  // 			if (overlay.classList.contains('active')) {
  // 				burger.click();
  // 			}
  // 		} catch(err) {
  // 			console.log(err.message);
  // 		}
  // 	})
  // })

  const slider = () => {
    try {
      new Swiper(".location__slider", {
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

  // fancybox();
  calc();

  const questions = document.querySelectorAll(".ques__top");

  questions.forEach((item) => {
    item.addEventListener("click", () => {
      const icon = item.querySelector(".ques__icon");
      icon.classList.toggle("active");
    });
  });
});
