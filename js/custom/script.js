/**
 * scripts.js
 */
(function($) {

  var height = window.innerHeight;
  $('body').css('height', height);
  $('#main').delay(500).fadeIn(1000, function(){
    $('#block').animate({
     'margin-left': 0
    },750, function(){
      $('#logo').fadeIn(500);
      $('#block ul').fadeIn(500);
    });
  });


}(jQuery));
