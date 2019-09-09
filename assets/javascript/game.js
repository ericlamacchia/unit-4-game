// Need to make a header containing a jumbotron with the title of my game, to be done on my html
// Will have an explanation of the rules below the jumbotron via the html
// Need to place the images for the jewels so they display on the page
// At the start of each game I need to have a random number that changes.
// Each of the jewels will be given a different value at the start of each new game, you will not know the value until you click the jewel
// In order to win this game you need to match your score to the random number so ill need to build a function
// Have a display for wins and losses that will update when you win or lose
// need to have my target value as 102 + 19


var randomResult;
var losses = 0;
var wins = 0;
var previous = 0;
var images = ["assets/images/green gem.png", "assets/images/orange gem.png", "assets/images/redgem.png", "assets/images/yellow.png"]

var resetGame = function () {

    $(".jewels").empty();

    randomResult = Math.floor(Math.random() * 102) + 19;



    $("#result").html('Random Number: ' + randomResult);

    for (var i = 0; i < 4; i++) {
        var random = Math.floor(Math.random() * 11) + 1;
        //console.log(random);
        
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
    if (previous > randomResult) {
        losses++;
        $("#losses").html("You lost: " + losses);
        previous = 0;
        
        resetGame();

    }
    else if (previous === randomResult) {
        wins++;
        $("#wins").html("You won: " + wins);
        
        previous = 0;
        resetGame();

    }


});



