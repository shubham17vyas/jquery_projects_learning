var main = function() {
  $('form').submit(function() {
    var firstName = $('#first').val();
    var lastName = $('#last').val();
    var email = $('#email').val();
    var pass = $('#password').val();
    if(firstName === "") {
      $('.first-name-error').text('Please enter your first name.');
    }
		if(lastName === ""){
      $('.last-name-error').text('Please enter your last name.');
    }
    if(email === ""){
      $('.email-error').text('Please enter your email address.');
    } else if(email === "shubham17vyas@gmail.com"){
      $('.email-error').text('This email is already taken.');
    }
    if(pass === ""){
      $('.password-error').text('Please enter a pasword.');
    }else if(pass.length <=8){
      $('.password-error').text('Short passwords are easy to guess. Try one with at least 8 characters.');
    }
    return false;
  });
};

$(document).ready(main);