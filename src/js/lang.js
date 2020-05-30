$('.js-lang li').on('click', function() {

  $(this)
    .addClass('is-active')
    .siblings()
    .removeClass('is-active');

});
