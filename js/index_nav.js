$('.menu-toggle').click(function() {

  $('.site-nav').toggleClass('site-nav--open', 500);
  $(this).toggleClass('open');

})

$('.site-nav a').click(function() {
  $('.site-nav').removeClass('site-nav--open');
})
