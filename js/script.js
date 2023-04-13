const burger = document.getElementById('menu_burger');
const headerMenu = document.querySelector('.header__menu');
if (burger) {
  burger.addEventListener('click', (e) => {
    document.body.classList.toggle('_lock');
    burger.classList.toggle('_active');
    headerMenu.classList.toggle('_active');
  });
}

const menuArrows = document.querySelectorAll('.menu__arrow');
if (menuArrows.length > 0) {
  menuArrows.forEach((menuArrow) => {
    menuArrow.addEventListener('click', (e) => {
      e.target.parentNode.classList.toggle('_active');
    });
  });
}

/** Slider */
const swiper = new Swiper('.slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper_partners = new Swiper('.slider_partners', {
  slidesPerView: 4,
  spaceBetween: 30,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1000: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});
