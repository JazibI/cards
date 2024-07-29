// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 3,
//       spaceBetween: 30,
//       pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//       },
//   cssMode: true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//   },
//   mousewheel: true,
//   keyboard: true,
// });


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  // spaceBetween: 30,
  // centeredSlides: true,
  // loop: true,
  breakpoints: {
    480: {
        slidesPerView: 1
    },
    768: {
        slidesPerView: 2,
        spaceBetween: 28
    },
    980: {
        slidesPerView: 3,
        spaceBetween: 28,
        resistanceRatio: 0.85
    }
},
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});