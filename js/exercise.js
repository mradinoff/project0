let xMoves = "";
let oMoves = "";
let moves = "";

let turns = ['1','2','3','4','5','6','7','8','9']

function reply_click()
{
    let whatWasClicked = event.srcElement.id;
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

const playerTurn = function(){

}


$(document).ready(function() {
  console.log(`document ready`)

  $('#1').on('click', function(){
    $(this).prop('disabled', true);


    if(turns.length % 2 === 0 ){
      $('#1').addClass('x');
      xMoves = xMoves + "1";
    }
    else{
      $('#1').addClass('o');
      oMoves = oMoves + "1"
    }
    winCheck();
    playerTurn();
    turns.pop();

  })


  $('#2').on('click', function(){
    $(this).prop('disabled', true);

    if(turns.length % 2 === 0 ){
      $('#2').addClass('x');
      xMoves = xMoves + "2";
    }
    else{
      $('#2').addClass('o');
      oMoves = oMoves + "2"
    }
    winCheck();
    playerTurn();
    turns.pop();

  })


  $('#3').on('click', function(){
    $(this).prop('disabled', true);

    if(turns.length % 2 === 0 ){
      $('#3').addClass('x');
      xMoves = xMoves + "3";
    }
    else{
      $('#3').addClass('o');
      oMoves = oMoves + "3"
    }
    winCheck();
    playerTurn();
    turns.pop();

  })

  $('#4').on('click', function(){
    $(this).prop('disabled', true);

    if(turns.length % 2 === 0 ){
      $('#4').addClass('x');
      xMoves = xMoves + "4";
    }
    else{
      $('#4').addClass('o');
      oMoves = oMoves + "4"
    }
    winCheck();
    playerTurn();
    turns.pop();

  })


  $('#5').on('click', function(){
    $(this).prop('disabled', true);

    if(turns.length % 2 === 0 ){
      $('#5').addClass('x');
      xMoves = xMoves + "5";
    }
    else{
      $('#5').addClass('o');
      oMoves = oMoves + "5"
    }
    winCheck();
    playerTurn();
    turns.pop();

  })


  $('#6').on('click', function(){
    $(this).prop('disabled', true);

    if(turns.length % 2 === 0 ){
      $('#6').addClass('x');
      xMoves = xMoves + "6";
    }
    else{
      $('#6').addClass('o');
      oMoves = oMoves + "6"
    }
    winCheck();
    playerTurn();
    turns.pop();

  })


  $('#7').on('click', function(){
    $(this).prop('disabled', true);
    moves = moves + "7";

    if(turns.length % 2 === 0 ){
      $('#7').addClass('x');
      xMoves = xMoves + "7";
    }
    else{
      $('#7').addClass('o');
      oMoves = oMoves + "7"
    }
    winCheck();
    playerTurn();
    turns.pop();

  })


  $('#8').on('click', function(){
    $(this).prop('disabled', true);

    if(turns.length % 2 === 0 ){
      $('#8').addClass('x');
      xMoves = xMoves + "8";
    }
    else{
      $('#8').addClass('o');
      oMoves = oMoves + "8"
    }
    winCheck();
    playerTurn();
    turns.pop();

  })

  $('#9').on('click', function(){
    $(this).prop('disabled', true);

    if(turns.length % 2 === 0 ){
      $('#9').addClass('x');
      xMoves = xMoves + "9";
    }
    else{
      $('#9').addClass('o');
      oMoves = oMoves + "9"
    }
    winCheck();
    playerTurn();
    turns.pop();

  })
})
