/*adding a comment*/
'use strict';

$(document).ready(function() {
  // Put app logic here
    var block = null;
    
    $("[data-stack]").click(function() {
        if (block === null) {
            block = $(this).children().last().detach();
        }
        else {
            $(this).append(block);
            block = null;
            checkForWin();
        }
    });
    
    function checkForWin() {
        // Your code here
        if ($('[data-stack="2"]').children().length === 4 || ($('[data-stack="3"]').children().length === 4 )) {
            $("#announce-game-won").text("You won!");

            //turn off click if winner
            $( "[data-cell]" ).off();
        
        } 
    }
    
});

/*function checkForWin() {
        if (checkForWin).each()) {
            $("#announce-winner").text("Player " + playerTurn + " Wins!");
            //turn off click if winner
            $( "[data-cell]" ).off();
        }

    }*/