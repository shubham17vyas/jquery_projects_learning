//attach a keyup event handler to the #top-text input so that it can respond to when a user types a key. 
//Inside the keyup event handler, get the text entered into the #top-text input using .val(). Then set it as the text of <h1 class="top-caption"> using .text().
//Attach a second keyup event handler to the #bottom-text input. Inside this event handler, get the text entered into #bottom-text, and set it as the text of 
////<h1 class="bottom-caption">.
//Attach a third keyup event handler to the #image-url input. Inside this event handler, get the text entered into #image-url, and set it as the src attribute of 
////the element using .attr(). Check out how .attr() works.
var main = function(){
  	$('#top-text').keyup(function(){
		$('.top-caption').text($(this).val());
	});
  	$('#bottom-text').keyup(function(){
    $('.bottom-caption').text($(this).val());
  });
    $("#image-url").keyup(function(){
    $('.meme').children().attr('src', $(this).val());
	});
};
 
$(document).ready(main);