import tabs from '/assets/js/tabs.js'
import hamburger from '/assets/js/hamburger.js'
import SendForm from '/assets/js/sendform.js'
import Popup from '/assets/js/popup.js'
import scroll from '/assets/js/scroll.js'
tabs()
hamburger()
scroll()
const formCost = new SendForm('.form_proposal', '/send-cost.php', '.success_popup')
formCost.send()
const formProposal = new SendForm('.sendform', '/sendmodel.php', '.success_popup')
formProposal.send()
const formCalculation = new SendForm('.send_calculation', '/sendcalc.php', '.success_popup')
formCalculation.send()
const formTender = new SendForm('.tender_form', '/sendtender.php', '.success_popup')
formTender.send()

const popup = new Popup('.btn_cost_popup','.calculate_cost','.img-close-pop')
popup.show()
popup.closePopap()
const popupSuccess = new Popup('.btn_cost_popup','.success_popup','.img-close-pop')
popupSuccess.closePopap()
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
        clickable: true,
        type: 'bullets',
      }
  });
  const swiperDelivery = new Swiper('.swiperDelivery', {
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
        el: '.swiper-pagination_delivery',
        clickable: true,
        type: 'bullets',
      }
  });
  const swiperUslug = new Swiper('.swiperUslug', {
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
        el: '.swiper-pagination_uslug',
        clickable: true,
        type: 'bullets',
      },
  });
  let selector = document.querySelectorAll(".mask-tel");
let im = new Inputmask("+7(999)999-99-99");
selector.forEach( inp => {
  im.mask(inp)
})