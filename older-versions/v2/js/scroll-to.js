function scrollTo(element, time) {
  $('html, body').animate({
      scrollTop: $(element).offset().top
  }, time);
}


$("#flat-button-one").live('click', function() {
    scrollTo("#header-two", 2000);
    setTimeout(200);
    scrollTo("#first-about-us-item", 1500);
    setTimeout(200);
    scrollTo("#second-about-us-item", 1500);
    setTimeout(200);
    scrollTo("#last-about-us-item", 1500);
});


function appendText() {
    var exittext = "<p class='exit-text'>Thanks for visiting</p>";
    $("body").append(exittext);
    $(".exit-text").css({"textAlign" : "center"});
}
$("#flat-button-two").live('click', function() {
//    scrollTo(".header-three", 2000);
});

$("#flat-button-three").live('click', function() {
    scrollTo(".header-four", 2000);
});

$("#flat-button-four").live('click', function() {
    scrollTo(".header-five", 2000);
});

$(".down-arrow").live('click', function() {
    scrollTo(".header-two", 2000)
});
