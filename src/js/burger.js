// burger

$('.js-open-menu').on('click', function(e) {
  $('.main-nav').toggleClass('is-active');
  $(this).toggleClass('active');
});
