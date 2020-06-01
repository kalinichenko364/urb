// slick-carousel

import "slick-carousel";

$(".js-slider").slick({
  prevArrow: $(".slider__arrow--prev"),
  nextArrow: $(".slider__arrow--next")
});

$(".js-clients-slider").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 380,
      settings: {
        slidesToShow: 1
      }
    }
  ],
  prevArrow: $(".clients-slider__arrow--prev"),
  nextArrow: $(".clients-slider__arrow--next")
});

// import './lang.js';

// import './slider.js';

// import './burger.js';
