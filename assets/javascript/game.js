// Need to make a header containing a jumbotron with the title of my game, to be done on my html
// Will have an explanation of the rules below the jumbotron via the html
// Need to place the images for the jewels so they display on the page
// At the start of each game I need to have a random number that changes.
// Each of the jewels will be given a different value at the start of each new game, you will not know the value until you click the jewel
// In order to win this game you need to match your score to the random number so ill need to build a function
// Have a display for wins and losses that will update when you win or lose
// need to have my target value as 102 + 19

// Named my variables for the rest of the assignment
// Made an array for my different jewel images
var randomResult;
var losses = 0;
var wins = 0;
var previous = 0;
var images = ["assets/images/green gem.png", "assets/images/orange gem.png", "assets/images/redgem.png", "assets/images/yellow.png"]

//This resets the value each time the game restarts

var resetGame = function () {

    $(".jewels").empty();
// This is the math for my highest possible number as well as my lowest possible number

    randomResult = Math.floor(Math.random() * 102) + 19;

// Assigning that random number and adding it to my display

    $("#result").html('Random Number: ' + randomResult);

// Giving each jewel a random value at the start of each game

    for (var i = 0; i < 4; i++) {
        var random = Math.floor(Math.random() * 11) + 1;
        //console.log(random);
        
// Giving each jewel block a jewel image
        var jewel = $("<img>");
        jewel.attr({
            "class": 'jewel',
            "data-forme": random,

            "src": images[i]

        });

        //jewel.html(random);

        $(".jewels").append(jewel);

    }
        $("#previous").html("Current amount: " + previous)
}



resetGame();

$(document).on('click',".jewel", function () {

    var num = parseInt($(this).attr('data-forme'));
    previous += num;
    $("#previous").html("Current amount: " + previous)
    console.log(previous)
    // function for losing the game if you go above random result you lose
    if (previous > randomResult) {
        losses++;
        $("#losses").html("You lost: " + losses);
        previous = 0;
    // This resets the game if you lose    
        resetGame();

    }
    // function for winning the game if you match the random result you win
    else if (previous === randomResult) {
        wins++;
        $("#wins").html("You won: " + wins);
        
        previous = 0;
    //If you win the game it resets
        resetGame();

    }


});



