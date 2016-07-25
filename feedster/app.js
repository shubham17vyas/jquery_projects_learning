var main = function() {
  $('.notification').click(function(){
    $('.notification-menu').toggle();
  });
  $('.post').click(function(){
    $('.btn-like').toggle();
  });
};

$(document).ready(main);