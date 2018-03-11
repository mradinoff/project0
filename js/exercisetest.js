

let xMoves = "";
let oMoves = "";
let moves = "";
let whatWasClicked ="";
let turns = ['1','2','3','4','5','6','7','8','9']


function reply_click()
{
    whatWasClicked = event.srcElement.id;
};

const turn = function(){
  if (xMoves.indexOf(whatWasClicked)> -1 || oMoves.indexOf(whatWasClicked > -1)){
  }
  let classWhatWasClicked = "#" + whatWasClicked;
  console.log(typeof(classWhatWasClicked));
  if(turns.length % 2 === 0 ){
    $('classWhatWasClicked').addClass('x');
    xMoves = xMoves + whatWasClicked;
  }
  else{
    $('classWhatWasClicked').addClass('o');
    oMoves = oMoves + whatWasClicked
  }
}
const winCheck = function(){
  if (turns.length % 2 === 0){
    moves = xMoves;
  }
  else {
    moves = oMoves;
  }
  if(moves.indexOf('1') > -1 && moves.indexOf('2') > -1 && moves.indexOf('3') > -1){
    console.log(`yesssss`);
  }

  if(moves.indexOf('4') > -1 && moves.indexOf('5') > -1 && moves.indexOf('6') > -1){
    console.log(`yesssss`);
  }


  if(moves.indexOf('1') > -1 && moves.indexOf('4') > -1 && moves.indexOf('7') > -1){
    console.log(`yesssss`);
  }


  if(moves.indexOf('2') > -1 && moves.indexOf('5') > -1 && moves.indexOf('8') > -1){
    console.log(`yesssss`);
  }


  if(moves.indexOf('3') > -1 && moves.indexOf('6') > -1 && moves.indexOf('9') > -1){
    console.log(`yesssss`);
  }


  if(moves.indexOf('1') > -1 && moves.indexOf('5') > -1 && moves.indexOf('9') > -1){
    console.log(`yesssss`);
  }


  if(moves.indexOf('3') > -1 && moves.indexOf('5') > -1 && moves.indexOf('7') > -1){
    console.log(`yesssss`);
  }

  if(turns[0] != '1'){
    drawMessage();
  }
  moves = "";

}



$(document).ready(function() {
  console.log(`document ready`)

  $('.buttons').on('click', function(){
    turn();
    winCheck();
    turns.pop();

  })
})
