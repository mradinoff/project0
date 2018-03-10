let xMoves = "";
let oMoves = "";
let moves = "";

let turns = ['1','2','3','4','5','6','7','8','9']

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

  $('#one').on('click', function(){
    $(this).prop('disabled', true);


    if(turns.length % 2 === 0 ){
      $('#one').addClass('x');
      xMoves = xMoves + "1";
    }
    else{
      $('#one').addClass('o');
      oMoves = oMoves + "1"
    }
    winCheck();
    playerTurn();
    turns.pop();

  })


  $('#two').on('click', function(){
    $(this).prop('disabled', true);

    if(turns.length % 2 === 0 ){
      $('#two').addClass('x');
      xMoves = xMoves + "2";
    }
    else{
      $('#two').addClass('o');
      oMoves = oMoves + "2"
    }
    winCheck();
    playerTurn();
    turns.pop();

  })


  $('#three').on('click', function(){
    $(this).prop('disabled', true);

    if(turns.length % 2 === 0 ){
      $('#three').addClass('x');
      xMoves = xMoves + "3";
    }
    else{
      $('#three').addClass('o');
      oMoves = oMoves + "3"
    }
    winCheck();
    playerTurn();
    turns.pop();

  })

  $('#four').on('click', function(){
    $(this).prop('disabled', true);

    if(turns.length % 2 === 0 ){
      $('#four').addClass('x');
      xMoves = xMoves + "4";
    }
    else{
      $('#four').addClass('o');
      oMoves = oMoves + "4"
    }
    winCheck();
    playerTurn();
    turns.pop();

  })


  $('#five').on('click', function(){
    $(this).prop('disabled', true);

    if(turns.length % 2 === 0 ){
      $('#five').addClass('x');
      xMoves = xMoves + "5";
    }
    else{
      $('#five').addClass('o');
      oMoves = oMoves + "5"
    }
    winCheck();
    playerTurn();
    turns.pop();

  })


  $('#six').on('click', function(){
    $(this).prop('disabled', true);

    if(turns.length % 2 === 0 ){
      $('#six').addClass('x');
      xMoves = xMoves + "6";
    }
    else{
      $('#six').addClass('o');
      oMoves = oMoves + "6"
    }
    winCheck();
    playerTurn();
    turns.pop();

  })


  $('#seven').on('click', function(){
    $(this).prop('disabled', true);
    moves = moves + "7";

    if(turns.length % 2 === 0 ){
      $('#seven').addClass('x');
      xMoves = xMoves + "7";
    }
    else{
      $('#seven').addClass('o');
      oMoves = oMoves + "7"
    }
    winCheck();
    playerTurn();
    turns.pop();

  })


  $('#eight').on('click', function(){
    $(this).prop('disabled', true);

    if(turns.length % 2 === 0 ){
      $('#eight').addClass('x');
      xMoves = xMoves + "8";
    }
    else{
      $('#eight').addClass('o');
      oMoves = oMoves + "8"
    }
    winCheck();
    playerTurn();
    turns.pop();

  })

  $('#nine').on('click', function(){
    $(this).prop('disabled', true);

    if(turns.length % 2 === 0 ){
      $('#nine').addClass('x');
      xMoves = xMoves + "9";
    }
    else{
      $('#nine').addClass('o');
      oMoves = oMoves + "9"
    }
    winCheck();
    playerTurn();
    turns.pop();

  })
})
