$(window).scroll(function () {
  if(strongPointsFadedIn == false){
    strongPointsFadedIn = fadeInArea(".my-strong-points");
    }
  });


function fadeInArea(selector) {
  if ($(window).scrollTop() >= ($(selector).height() - $(window).height()) + 150) {
      $(selector).css('visibility', 'visible').hide().fadeIn(200);
      $(this).off('scroll');
      return true;
    }
}
