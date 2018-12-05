$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#scroll').fadeIn();
    } else {
      $('#scroll').fadeOut();
    }
  });
  $('#scroll').click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });
});

$(document).ready(function() {
  var $grid = $(".grid");
  $grid.imagesLoaded(function() {
    $grid.masonry({
      itemSelector: ".item",
      columnWidth: 10
    });
  });
  $(".button").click(function() {
    $(this).addClass("selected");
    $(".button").not($(this)).removeClass("selected");
    var ssf = $(this).attr("filter");
    $(".item." + ssf).show();
    $(".item").not("." + ssf).hide();
    $grid.masonry();
  });
});
