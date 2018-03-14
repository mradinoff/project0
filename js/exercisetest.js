//Make the DIV element draggagle:
dragElement(document.getElementById(("mydiv")));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
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

let xMoves = "";
let oMoves = "";
let moves = "";
let whatWasClicked ="";
let turns = [1,2,3,4,5,6,7,8,9]
let xscore = 0
let oscore = 0

function reply_click()
{
    whatWasClicked = event.srcElement.id;
};
const playerTurn = function(){
  if (turns[turns.length-1] % 2 === 0 ){
    $('p').text("O's turn");
    $('.oscore').text(oscore);
  }
  else{
    $('p').text("X's turn");
    $('.xscore').text(xscore);
  }
}
const win = function(){
  $('.buttons *').attr('disabled', true);
  if(turns[turns.length-1] % 2 === 0){
    oscore = oscore + 1;
    $('.x').addClass('oWins');
    $('.oscore').text(oscore);
    $('p').text("O WINS !!!");
  }
  else{
    xscore = xscore + 1;
    $('.o').addClass('xWins');
    $('.xscore').text(xscore);
    $('p').text("X WINS !!!");
  }
}

const refresh = function(){
  xMoves = "";
  oMoves = "";
  moves = "";
  whatWasClicked ="";
  $('.buttons *').removeAttr("disabled")
  $('.buttons *').removeClass("x")
  $('.buttons *').removeClass("o")
  $('.buttons *').removeClass("xWins")
  $('.buttons *').removeClass("oWins")

  if(turns[0] === 1){
    turns = [2,3,4,5,6,7,8,9,10]
  }
  else{
    turns = [1,2,3,4,5,6,7,8,9]
  }
};

const turn = function(){
  let classWhatWasClicked = "#" + whatWasClicked;
  $(classWhatWasClicked).attr('disabled', true);
  if(turns[turns.length-1] % 2 === 0 ){
    $(classWhatWasClicked).addClass('x');
    xMoves = xMoves + whatWasClicked;
  }
  else{
    $(classWhatWasClicked).addClass('o');
    oMoves = oMoves + whatWasClicked
  }
}
const winCheck = function(){
  if (turns[turns.length-1] % 2 === 0){
    moves = xMoves;
  }
  else {
    moves = oMoves;
  }
  if(moves.indexOf('1') > -1 && moves.indexOf('2') > -1 && moves.indexOf('3') > -1){
    win();

  }

  else if(moves.indexOf('4') > -1 && moves.indexOf('5') > -1 && moves.indexOf('6') > -1){
    win();

  }

  else if(moves.indexOf('7') > -1 && moves.indexOf('8') > -1 && moves.indexOf('9') > -1){
    win();

  }

  else if(moves.indexOf('1') > -1 && moves.indexOf('4') > -1 && moves.indexOf('7') > -1){
    win();

  }


  else if(moves.indexOf('2') > -1 && moves.indexOf('5') > -1 && moves.indexOf('8') > -1){
    win();
  }


  else if(moves.indexOf('3') > -1 && moves.indexOf('6') > -1 && moves.indexOf('9') > -1){
    win();
  }


  else if(moves.indexOf('1') > -1 && moves.indexOf('5') > -1 && moves.indexOf('9') > -1){
    win();
  }


  else if(moves.indexOf('3') > -1 && moves.indexOf('5') > -1 && moves.indexOf('7') > -1){
    win();
  }

  else if(turns.length === 1){
    $('.buttons *').attr('disabled', true);
    $('p').text("It's a draw");

  }
  else{
  moves = "";
  }
}
$(document).ready(function() {
  console.log(`document ready`);
  playerTurn();
  $('.xscore').text(xscore)
  $('.oscore').text(oscore)

  $('h3').on('click',function(){
    playerTurn();
    refresh();
  })
  $('.buttons').on('click', function(){
    if (whatWasClicked.length===0 || xMoves.indexOf(whatWasClicked)> -1 || oMoves.indexOf(whatWasClicked)>-1){
    console.log(`heh`);
    }
    else{
      playerTurn();
      turn();
      winCheck();
      if (moves.length > 0 && turns.length < 8){
        console.log(`why?`)
        turns.pop();
        whatWasClicked = "";
      }
      else{
      turns.pop();
      playerTurn();
      }
    }
  })
})
