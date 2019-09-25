var mycanvas = document.getElementById('mycanvas');
var ctx = mycanvas.getContext('2d');
var snakeSize = 10; 
var w = 350;
var h = 350;
var score = 0;
var snake;
var food;
var bomb;
var submitName=document.getElementById('submitName');
var drawModule = (function () { 
    //creates the assets
    function bodySnake(x, y) {
          ctx.fillStyle = 'green';
          ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
          ctx.strokeStyle = 'darkgreen';
          ctx.strokeRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
    }
    function eats(x, y) {
          ctx.fillStyle = 'white';
          ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
          ctx.fillStyle = 'black';
          ctx.fillRect(x*snakeSize+1, y*snakeSize+1, snakeSize-2, snakeSize-2);
    }
    function bombs(x, y) {
        ctx.fillStyle = 'white';
        ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
        ctx.fillStyle = 'red';
        ctx.fillRect(x*snakeSize+1, y*snakeSize+1, snakeSize-2, snakeSize-2);
  }
  /*function bombs2(x, y) {
    ctx.fillStyle = 'white';
    ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
    ctx.fillStyle = 'red';
    ctx.fillRect(x*snakeSize+1, y*snakeSize+1, snakeSize-2, snakeSize-2);
}*/
    function scoreText() {
      var score_text = "Score: " + score;
      ctx.fillStyle = 'black';
      ctx.fillText(score_text, 145, h-5);
    }
    function drawSnake() {
        var length = 4;
        snake = [];
        for (var i = length-1; i>=0; i--) {
            snake.push({x:i, y:0});
        }  
    }
    function paint(){
        //define snakes movement
        ctx.fillStyle = 'gray';
        ctx.fillRect(0, 0, w, h);
        ctx.strokeStyle = 'black';
        ctx.strokeRect(0, 0, w, h);
        btn3.setAttribute('disabled', true);
        var snakeX = snake[0].x;
        var snakeY = snake[0].y;
        if (direction == 'right') { 
          snakeX++; }
        else if (direction == 'left') { 
          snakeX--; }
        else if (direction == 'up') { 
          snakeY--; 
        } else if(direction == 'down') { 
          snakeY++; }
        if (snakeX == -1 || snakeX == w/snakeSize || snakeY == -1 || snakeY == h/snakeSize || checkCollision(snakeX, snakeY, snake)) {
            //game over via wall
            alert=('GAME OVER! YOU SCORED: ' +score);
            btn3.removeAttribute('disabled', true);
            ctx.clearRect(0,0,w,h);
            gameloop = clearInterval(gameloop);
            score=0;
            return;          
          }
          //if snake gets the food
          if(snakeX == food.x && snakeY == food.y) {
            var tail = {x: snakeX, y: snakeY}; //Create a new head instead of moving the tail
            score ++;
            console.log(score);
            createFood();
            for(var i=1;i<=score;i++){
              createBomb();
            }
              
            
            //if snake hits the bomb
          } else if(snakeX==bomb.x&&snakeY==bomb.y){
            btn3.removeAttribute('disabled', true);
            ctx.clearRect(0,0,w,h);
            gameloop = clearInterval(gameloop);
            alert=('GAME OVER! YOU SCORED: '+score);
            score=0;
            return;          
          }
           else {
            var tail = snake.pop(); //pops out the last cell
            tail.x = snakeX; 
            tail.y = snakeY;
          }
          //The snake can now eat the food.
          snake.unshift(tail); //puts back the tail as the first cell
          for(var i = 0; i < snake.length; i++) {
            bodySnake(snake[i].x, snake[i].y);
          } 
          eats(food.x, food.y);
          bombs(bomb.x, bomb.y); 
          //bombs2(bomb2.x,bomb2.y);
          scoreText();
    }
    //creates the food
    function createFood() {
        food = {
          x: Math.floor((Math.random() * 30) + 1),
          y: Math.floor((Math.random() * 30) + 1)
        }
        for (var i=0; i>snake.length; i++) {
          var snakeX = snake[i].x;
          var snakeY = snake[i].y;
          if (food.x===snakeX && food.y === snakeY || food.y === snakeY && food.x===snakeX) {
            food.x = Math.floor((Math.random() * 30) + 1);
            food.y = Math.floor((Math.random() * 30) + 1);
          }
        }
    }
    //creates the bomb
    function createBomb() {
      bomb = {
          x: Math.floor((Math.random() * 30) + 1),
          y: Math.floor((Math.random() * 30) + 1)
        }
        console.log(bomb.x, bomb.y);
        for (var i=0; i>snake.length; i++) {
          var snakeX = snake[i].x;
          var snakeY = snake[i].y;
          if (bomb.x===snakeX && bomb.y === snakeY || bomb.y === snakeY && bomb.x===snakeX) {
            bomb.x = Math.floor((Math.random() * 30) + 1);
            bomb.y = Math.floor((Math.random() * 30) + 1);
          }
        }
    }
    /*function createBomb2() {
      bomb2 = {
          x: Math.floor((Math.random() * 30) + 1),
          y: Math.floor((Math.random() * 30) + 1)
        }
        console.log(bomb2.x, bomb2.y);
        for (var i=0; i>snake.length; i++) {
          var snakeX = snake[i].x;
          var snakeY = snake[i].y;
          if (bomb2.x===snakeX && bomb2.y === snakeY || bomb2.y === snakeY && bomb2.x===snakeX) {
            bomb2.x = Math.floor((Math.random() * 30) + 1);
            bomb2.y = Math.floor((Math.random() * 30) + 1);
          }
        }
    }*/
    function checkCollision(x, y, array) {
        for(var i = 0; i < array.length; i++) {
          if(array[i].x === x && array[i].y === y)
          return true;
        } 
        return false;
    }
    function init(){
        direction = 'down';
        drawSnake();
        createFood();
        createBomb();
        //createBomb2();
        gameloop = setInterval(paint, 80);
    }
      return {
        init : init
      };  
  }());
  //start button and controls
  (function (window, document, drawModule, undefined) {
    var btn3 = document.getElementById('btn3');
    btn3.addEventListener("click", function(){ drawModule.init();});
        document.keydown = function(event) {
            keyCode = window.event.keyCode; 
            keyCode = event.keyCode;
            switch(keyCode) {
            case 65: 
              if (direction != 'right') {
                direction = 'left';
              }
              break;
            case 68:
              if (direction != 'left') {
              direction = 'right';
              }
              break;
            case 87:
              if (direction != 'down') {
              direction = 'up';
              }
              break;
            case 83:
              if (direction != 'up') {
              direction = 'down';
              }
              break;
              }
          }
          document.addEventListener( 'keydown', document.keydown, false );
    })(window, document, drawModule);
