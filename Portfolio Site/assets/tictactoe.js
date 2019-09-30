//Tic Tac Toe
var newBoard;
var user = 'X';
var comp = 'O';
var victory = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
];
var squares = document.querySelectorAll('.cell');
var tl = document.getElementById('0');
var tm = document.getElementById('1');
var tr = document.getElementById('2');
var ml = document.getElementById('3');
var mm = document.getElementById('4');
var mr = document.getElementById('5');
var bl = document.getElementById('6');
var bm = document.getElementById('7');
var br = document.getElementById('8');
var table = document.getElementById('tbl');
var squareArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var randomNum = randomNumber();
var player;
var submitName = document.getElementById('submitName');
//New Game Function
function newGame() {
  document.querySelector('.end').style.display = 'none';
  newBoard = Array.from(Array(9).keys());
  for (var i = 0; i < squares.length; i++) {
    squares[i].innerText = '';
    squares[i].addEventListener('click', nextTurn, false);
  }
}
//Function alotting turns
function nextTurn(box) {
  if (typeof newBoard[box.target.id] == 'number') {
    next(box.target.id, user);
    if (!checkDraw()) next(compChoice(), comp);
  }
}

function next(whichCell, player) {
  newBoard[whichCell] = player;
  document.getElementById(whichCell).innerText = player;
  let gameWon = checkWin(newBoard, player);
  if (gameWon) gameOver(gameWon);
}
//Check if game has been won by the player
function checkWin(board, player) {
  let plays = board.reduce((a, e, i) =>
    (e === player) ? a.concat(i) : a, []);
  let gameWon = null;
  for (let [index, win] of victory.entries()) {
    if (win.every(elem => plays.indexOf(elem) > -1)) {
      gameWon = {
        index: index,
        player: player
      };
      break;
    }
  }
  return gameWon;
}
//Function to check if there's a draw
function checkDraw() {
  if (emptyCell().length === 0) {
    for (var i = 0; i < squares.length; i++) {
      squares[i].removeEventListener('click', nextTurn, false);
    }
    nameWinner('Draw!');
    return true;
  }
  return false;
}
/*
var firstUser=1;
function update(){ 
    if (firstUser==1){
        document.getElementById('0').innerHTML='X';
        firstUser=0;
    } else {
        document.getElementById('0').innerHTML='O';    
        firstUser=1;
    }   
}
function update1(){ 
    if (firstUser==1){
        document.getElementById('1').innerHTML='X';
        firstUser=0;
    } else {
        document.getElementById('1').innerHTML='O';    
        firstUser=1;
    }   
}
function update2(){ 
    if (firstUser==1){
        document.getElementById('2').innerHTML='X';
        firstUser = 0;
    } else {
        document.getElementById('2').innerHTML='O';    
        firstUser=1;
    }   
}
function update3(){ 
    if (firstUser==1){
        document.getElementById('3').innerHTML = 'X';
        firstUser=0;
    } else {
        document.getElementById('3').innerHTML = 'O';    
        firstUser=1;
    }   
}
function update4(){ 
    if (firstUser==1){
        document.getElementById('4').innerHTML = 'X';
        firstUser=0;
    } else {
        document.getElementById('4').innerHTML = 'O';    
        firstUser=1;
    }   
}
function update5(){ 
    if (firstUser==1){
        document.getElementById('5').innerHTML = 'X';
        firstUser=0;
    } else {
        document.getElementById('5').innerHTML = 'O';    
        firstUser=1;
    }   
}
function update6(){ 
    if (firstUser==1){
        document.getElementById('6').innerHTML = 'X';
        firstUser=0;
    } else {
        document.getElementById('6').innerHTML = 'O';    
        firstUser=1;
    }   
}
function update7(){ 
    if (firstUser==1){
        document.getElementById('7').innerHTML = 'X';
        firstUser=0;
    } else {
        document.getElementById('7').innerHTML = 'O';    
        firstUser=1;
    }   
}
function update8(){ 
    if (firstUser==1){
        document.getElementById('8').innerHTML = 'X';
        firstUser=0;
    } else {
        document.getElementById('8').innerHTML = 'O';    
        firstUser=1;
    }   
}
*/
//Function that ends the game and declares whether user won or lost
function gameOver(gameWon) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].removeEventListener('click', nextTurn, false);
  }
  nameWinner(gameWon.player == user ? 'VICTORY!' : 'DEFEAT!');
}
//Pushes the victory or defeat string to the end div
function nameWinner(who) {
  document.querySelector('.end').style.display = 'block';
  document.querySelector('.end .text').innerText = who;
}
//Function to find empty cells
function emptyCell() {
  return newBoard.filter(s => typeof s == 'number');
}
//Function for a random number from 0 to 8
function randomNumber() {
  //console.log(Math.floor(Math.random()*8))
  return Math.floor(Math.random() * 8);
}
//Function for the computer's choice
function compChoice() {
  //console.log(randomNum);
  return emptyCell()[0];
  //return emptyCell()[randomNum];
}
//the 0 moves from 0-8 in order, 
//the randomNum moves randomly but breaks sometimes, reload page
//swap commented out to change
newGame();