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

randomResult = Math.floor(Math.random() * 102 ) + 19;



$("#result").html('Random Number: ' + randomResult);

for(var i = 0; i < 4; i++){
    var random =Math.floor(Math.random() * 11) + 1;
    //console.log(random);
    var jewel = $("<div>");
        jewel.attr({
            "class": 'jewel',
            "data-forme": random
        });


    $(".jewels").append(jewel);

    }
    
    $(".jewel").on('click', function () {

        var num = parseInt($(this).attr('data-forme'));
        previous += num;
        console.log(previous)
        if (previous > randomResult){
            losses--;
            $("#losses").html(losses);
            
        }
        else if(previous === randomResult){
            wins++;
            $("#wins").html(wins);

        }
        
        
    });

    

