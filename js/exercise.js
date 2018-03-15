//Make the DIV element draggagle:
dragElement(document.getElementById(("mydiv")));

function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
//End CSS manipulation

//The folllowing are global arrays
let xMoves = "";
let oMoves = "";
let moves = "";
let whatWasClicked = "";
let turns = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let xscore = 0
let oscore = 0

function reply_click() //says which specific button was clicked
{
    whatWasClicked = event.srcElement.id;
};
const playAudio = function() {
    $('#drawing')[0].play(); //declaring array necessary in function
}
const playAudioTwo = function() {
    $('#drawingTwo')[0].play();
}
const playerTurn = function() {
    if (turns[turns.length - 1] % 2 === 0) { // if even
        $('p').text("O's turn"); //change turn text

    } else {
        $('p').text("X's turn");
    }
}
const win = function() {
    $('.buttons *').attr('disabled', true);
    if (turns[turns.length - 1] % 2 === 0) {
        oscore = oscore + 1; // If turn number even, O wins
        $('.x').addClass('oWins'); //Change O's to change style
        $('.oscore').hide(10) //for score animation
        $('.oscore').text(oscore);
        $('.oscore').show(1000);
        $('p').text("O WINS !!!"); //Change turn text to show congratulations
    } else {
        xscore = xscore + 1;
        $('.o').addClass('xWins');
        $('.xscore').hide(10)
        $('.xscore').text(xscore);
        $('.xscore').show(1000)
        $('p').text("X WINS !!!");
    }
}

const refresh = function() {
    xMoves = "";
    oMoves = "";
    moves = "";
    whatWasClicked = ""; //resets global variables
    $('.buttons *').removeAttr("disabled")
    $('.buttons *').removeClass("x")
    $('.buttons *').removeClass("o")
    $('.buttons *').removeClass("xWins")
    $('.buttons *').removeClass("oWins") //resets classes and attributes

    if (turns[0] === 1) {
        turns = [2, 3, 4, 5, 6, 7, 8, 9, 10] // so starting players rotate
    } else {
        turns = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
};

const turn = function() {
    let classWhatWasClicked = "#" + whatWasClicked; //assigns class variable to individual buttons
    $(classWhatWasClicked).attr('disabled', true); //disables individual buttons
    if (turns[turns.length - 1] % 2 === 0) {
        $(classWhatWasClicked).addClass('x'); //changes background of transparent button to X image
        $(classWhatWasClicked).hide();
        $(classWhatWasClicked).fadeIn(1500); //animation
        playAudio(); // plays drawing sound effect
        xMoves = xMoves + whatWasClicked; //adds whats was clicked to xMoves global array
    } else {
        $(classWhatWasClicked).addClass('o');
        oMoves = oMoves + whatWasClicked
        $(classWhatWasClicked).hide();
        $(classWhatWasClicked).fadeIn(1500);
        playAudioTwo();
    }
}
const winCheck = function() {
    if (turns[turns.length - 1] % 2 === 0) {
        moves = xMoves;
    } else {
        moves = oMoves;
    }
    if (moves.indexOf('1') > -1 && moves.indexOf('2') > -1 && moves.indexOf('3') > -1) {
        win();
    } else if (moves.indexOf('4') > -1 && moves.indexOf('5') > -1 && moves.indexOf('6') > -1) {
        win();
    } else if (moves.indexOf('7') > -1 && moves.indexOf('8') > -1 && moves.indexOf('9') > -1) {
        win();
    } else if (moves.indexOf('1') > -1 && moves.indexOf('4') > -1 && moves.indexOf('7') > -1) {
        win();
    } else if (moves.indexOf('2') > -1 && moves.indexOf('5') > -1 && moves.indexOf('8') > -1) {
        win();
    } else if (moves.indexOf('3') > -1 && moves.indexOf('6') > -1 && moves.indexOf('9') > -1) {
        win();
    } else if (moves.indexOf('1') > -1 && moves.indexOf('5') > -1 && moves.indexOf('9') > -1) {
        win();
    } else if (moves.indexOf('3') > -1 && moves.indexOf('5') > -1 && moves.indexOf('7') > -1) {
        win();
    } else if (turns.length === 1) {
        $('.buttons *').attr('disabled', true); //all buttons are disabled
        $('p').text("It's a draw");
    } else {
        moves = "";
    }
}
$('h3').on('click', function() { //on click of restart button
    playerTurn();
    refresh();
})

//All game functionality within here
$(document).ready(function() {
    playerTurn(); //shows whose turn it is
    $('.xscore').text(xscore)
    $('.oscore').text(oscore)

    $('.buttons').on('click', function() {
        if (whatWasClicked.length === 0 || xMoves.indexOf(whatWasClicked) > -1 || oMoves.indexOf(whatWasClicked) > -1) {}
         // fixes strange error if space between buttons is clicked
        else {
            playerTurn();
            turn();
            winCheck();
            if (moves.length > 0 && turns.length < 8) {
                turns.pop();
                whatWasClicked = "";
            } else {
                turns.pop();
                playerTurn();
            }
        }
    })
})
