

var template = function(text) {
    return '<p><input type="checkbox"><i class="glyphicon glyphicon-star"></i><span>' + text + '</span><i class="glyphicon glyphicon-remove"></i></p>';
};
var add = function(item) {
    var html = template(item);
    $(html).appendTo('.list');
};
var main = function() {
    $('form').submit(function() {
        var todo = $('#todo');
        if (todo.val() !== "") {
            var html = template(todo.val());
            $(html).appendTo('.list');
            $(todo).val("");
        }
        return false;
    });
    $(document).on("click", '.glyphicon-remove', function() {
        $(this).parent().remove();
    });
    $(document).on("click", '.glyphicon-star', function() {
        $(this).toggleClass('active');
    });
    if (annyang) {
        var commands = {
            'add *item': add,
        };
        annyang.addCommands(commands);
        annyang.start();
    }
};
$(document).ready(main);

/*

var template = function(item) {
  return '<p><input type="checkbox"><i class="glyphicon glyphicon-star"></i><span>' + text + '</span><i class="glyphicon glyphicon-remove"></i></p>';
};
var add = function(item) {
    var html = template(item);
    $(html).appendTo('.list');
};
var main = function() {
  $('form').submit(function() {
    var text = $('#todo').val();
    var html = template(item);
    
    $(html).appendTo('.list');
    $('todo').val('');
    
    return false;  
  });
    $(document).on('click', '.glyphicon-remove', function(){
    $(this).parent().remove();
  });
  $(document).on('click', '.glyphicon-star', function(){
    $(this).toggleClass('active');
  });

  /*
  var add = function(item) {
  	var url = 'http://api.flickr.com/services/rest/?tags='+tag;
  $.getJSON(url);
};
  var add = {'add *item' : add};
  annyang.addCommands(commands);
  annyang.start();
  */
    if (annyang) {
        var commands = {
            'add *item': add,
        };
        annyang.addCommands(commands);
        annyang.start();
    }
};

$(document).ready(main); 
*/