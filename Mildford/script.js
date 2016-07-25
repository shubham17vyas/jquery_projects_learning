
var main = function(){
  $('.dropdown img').click(function(){
    $('.dropdown-menu').toggle();
  });
  $('form').submit(function(){
    var email = $('#email').val();
    var pass = $('#password').val();
    
    if(email === ""){
      $('.email-error').text("Please enter your email.");
    }
    if(pass === ''){
      $('.password-error').text('Please enter your password.');
    }
    return false;
  });
};
$(document).ready(main);