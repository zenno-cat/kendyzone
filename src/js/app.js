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
        // freeMode: true,
        // spaceBetween: 16,
        // breakpoints: {
        //   320: {
        //     slidesPerView: "auto",
        //     spaceBetween: 12,
        //   },
        //   575: {
        //     slidesPerView: 2,
        //     spaceBetween: 12,
        //   },
        //   768: {
        //     slidesPerView: "auto",
        //     spaceBetween: 12,
        //   },
        //   992: {
        //     slidesPerView: 4,
        //     spaceBetween: 16,
        //   },
        // },
      });
    } catch (err) {
      console.log(err);
    }
  };
  slider();
  // const questions = () => {
  // 	try {
  // 		const e = document.querySelectorAll(".ques__question");
  // 		e.forEach((e=>{
  // 			e.addEventListener("click", (t=>{
  // 				const c = e.querySelector(".ques__caption")
  // 					, a = e.querySelector(".ques__top");
  // 				e.classList.contains("collapsed") ? (e.classList.remove("active"),
  // 				c.classList.remove("active"),
  // 				a.classList.remove("active")) : (e.classList.add("active"),
  // 				c.classList.add("active"),
  // 				a.classList.add("active"))
  // 			}
  // 			))
  // 		}
  // 		)),
  // 		e[0].click()
  // 	} catch {}
  // }
  // questions();
  // fancybox();
  calc();
});
