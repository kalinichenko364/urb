import 'slick-carousel';

$('.js-slider').slick({
  prevArrow: $('.slider__arrow--prev'),
  nextArrow: $('.slider__arrow--next'),

  prevArrow: '<button class="btn-slick btn-slick--prev" type="button"><img src="img/arrow-prev.svg"></button>',
  nextArrow: '<button class="btn-slick btn-slick--next" type="button"><img src="img/arrow-next.svg"></button>'
});
