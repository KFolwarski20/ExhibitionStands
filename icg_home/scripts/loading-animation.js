window.addEventListener("load", function() {
    document.body.classList.add("loaded");
  });

$(window).on('load', function() {
    $('body > *:not(.preloader)').hide();
    $('.preloader').fadeOut(1500, function() {
      $('body > *:not(.preloader)').fadeIn();
    });
  });