import tabs from '/kdf/assets/js/tabs.js'
import hamburger from '/kdf/assets/js/hamburger.js'
tabs()
hamburger()
const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 2,
    spaceBetween:440,
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        920: {
          slidesPerView: 1,
          spaceBetween: 60
        },
        // when window width is >= 640px
        1000: {
          slidesPerView: 2,
          spaceBetween: 720
        },
        1260:{
          slidesPerView: 2,
          spaceBetween:440,
        }
      },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      }
  });