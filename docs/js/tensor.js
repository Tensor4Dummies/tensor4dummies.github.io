/*!
  * Tensor4Dummies (https://getbootstrap.com)
  * Copyright 2017 Jorge Parrilla (https://github.com/0x0soir)
  * Licensed under MIT
*/

var jumboHeight = $('.bg').outerHeight();
function parallax(){
var scrolled = $(window).scrollTop();
  $('.bg').css('height', (jumboHeight-scrolled) + 'px');
}

$(window).scroll(function(e){
parallax();
});

$('a[data-video-id]').click(function(event) {
  var $clickAttribute = $(event.target).attr('data-video-id');
  $(".video-container").each(function(){
      $(this).hide();
  });
  if ($clickAttribute){
      $('#video'+$clickAttribute).fadeIn('slow');
  }
});
