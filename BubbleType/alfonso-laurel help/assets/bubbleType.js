$(document).ready(function(){


    // Type using bubble type

    $('.letters').each(function() {

      var $letterWrapper = $(this);
      var letters = $letterWrapper.html().split('');
      var letterArray = [];

      for (i = 0; i < letters.length; i++) {
        console.log(letters[i]);

        var character = letters[i];
        var chracterDefinition = $('.letter-definition[data-character="' + character + '"]').html();
        var characterHTML = '<div class="letter" data-character="' + character + '">' + chracterDefinition + '</div>';
        
        letterArray.push(characterHTML);
      };

      $letterWrapper.html(letterArray);

    });



    // Random bubble size

    $('.sphere').each(function() {

        var min = 40;
    	var max = 60;

    	var random = Math.floor(Math.random() * (max - min + 1)) + min;
        
        $(this).css("width", random +"px");
        $(this).css("height", random +"px");
    });


    // jQuery toggle colors. click on any of the circles

    var state = 'one';

    // Change to "style two"
    function changeToTwo(){
        $('.sphere, .bigCircle, .backCircle').addClass('style-two');
        state = 'two';
    }

    // Change back to one (default)
    function changeToOne(){
        $('.sphere, .bigCircle, .backCircle').removeClass('style-two');
        state = 'one';
    }

    // Click the button
    $('.lilCircle').click(function(){

        if(state == 'one'){
          changeToTwo();
        }
        
        else {
          changeToOne();
        }    
    
    });

});