var mycanvas = document.getElementById("mycanvas");
var ctx = mycanvas.getContext("2d");
var snakeSize = 10;
var w = 350;
var h = 350;
var score = 0;
var snake;
var food;
var bomb;
var a = 1;
var counter = 80;
var submitName = document.getElementById("submitName");
var drawModule = (function() {
  //creates the assets
  function bodySnake(x, y) {
    ctx.fillStyle = "navy";
    ctx.fillRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize);
    ctx.strokeStyle = "gold";
    ctx.strokeRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize);
  }

  function eats(x, y) {
    ctx.fillStyle = "blue";
    ctx.fillRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize);
    ctx.fillStyle = "gold";
    ctx.fillRect(
      x * snakeSize + 1,
      y * snakeSize + 1,
      snakeSize - 2,
      snakeSize - 2
    );
  }

  function bombs(x, y) {
    ctx.fillStyle = "grey";
    ctx.fillRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize);
    ctx.fillStyle = "darkred";
    ctx.fillRect(
      x * snakeSize + 1,
      y * snakeSize + 1,
      snakeSize - 2,
      snakeSize - 2
    );
  }

  function bombs2(x, y) {
    ctx.fillStyle = "grey";
    ctx.fillRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize);
    ctx.fillStyle = "darkred";
    ctx.fillRect(
      x * snakeSize + 1,
      y * snakeSize + 1,
      snakeSize - 2,
      snakeSize - 2
    );
  }

  function bombs3(x, y) {
    ctx.fillStyle = "grey";
    ctx.fillRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize);
    ctx.fillStyle = "darkred";
    ctx.fillRect(
      x * snakeSize + 1,
      y * snakeSize + 1,
      snakeSize - 2,
      snakeSize - 2
    );
  }

  function bombs4(x, y) {
    ctx.fillStyle = "grey";
    ctx.fillRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize);
    ctx.fillStyle = "darkred";
    ctx.fillRect(
      x * snakeSize + 1,
      y * snakeSize + 1,
      snakeSize - 2,
      snakeSize - 2
    );
  }

  function bombs5(x, y) {
    ctx.fillStyle = "grey";
    ctx.fillRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize);
    ctx.fillStyle = "darkred";
    ctx.fillRect(
      x * snakeSize + 1,
      y * snakeSize + 1,
      snakeSize - 2,
      snakeSize - 2
    );
  }

  function bombs6(x, y) {
    ctx.fillStyle = "grey";
    ctx.fillRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize);
    ctx.fillStyle = "darkred";
    ctx.fillRect(
      x * snakeSize + 1,
      y * snakeSize + 1,
      snakeSize - 2,
      snakeSize - 2
    );
  }
  function bombs7(x, y) {
    ctx.fillStyle = "grey";
    ctx.fillRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize);
    ctx.fillStyle = "darkred";
    ctx.fillRect(
      x * snakeSize + 1,
      y * snakeSize + 1,
      snakeSize - 2,
      snakeSize - 2
    );
  }

  function scoreText() {
    var score_text = "Score: " + score;
    ctx.fillStyle = "black";
    ctx.fillText(score_text, 145, h - 5);
  }

  function drawSnake() {
    var length = 4;
    snake = [];
    for (var i = length - 1; i >= 0; i--) {
      snake.push({
        x: i,
        y: 0
      });
    }
  }

  function paint() {
    //define snakes movement
    ctx.fillStyle = "lightseagreen";
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = "black";
    ctx.strokeRect(0, 0, w, h);
    btn3.setAttribute("disabled", true);
    var snakeX = snake[0].x;
    var snakeY = snake[0].y;
    if (direction == "right") {
      snakeX++;
    } else if (direction == "left") {
      snakeX--;
    } else if (direction == "up") {
      snakeY--;
    } else if (direction == "down") {
      snakeY++;
    }
    if (
      snakeX == -1 ||
      snakeX == w / snakeSize ||
      snakeY == -1 ||
      snakeY == h / snakeSize ||
      checkCollision(snakeX, snakeY, snake)
    ) {
      //game over via wall
      console.log("GAME OVER! YOU SCORED: " + score);
      alert("GAME OVER! YOU SCORED: " + score);
      btn3.removeAttribute("disabled", true);
      ctx.clearRect(0, 0, w, h);
      gameloop = clearInterval(gameloop);
      score = 0;
      return;
    }
    //if snake gets the food
    if (snakeX == food.x && snakeY == food.y) {
      var tail = {
        x: snakeX,
        y: snakeY
      }; //Create a new head instead of moving the tail
      score++;
      //console.log(score);
      createFood();
      /*if(counter>1){
        counter-5;
        console.log(counter);
        setInterval(paint, counter);
      }*/
      for (var i = 1; i <= score; i++) {
        // createBomb();
        try {
          throw i;
        } catch (ii) {
          setTimeout(function() {
            createBomb();
            //console.log(ii);
          }, 1);
        }
        try {
          throw i;
        } catch (ii) {
          setTimeout(function() {
            createBomb2();
            //console.log(ii);
          }, 100);
        }
        try {
          throw i;
        } catch (ii) {
          setTimeout(function() {
            createBomb3();
            //console.log(ii);
          }, 500);
        }
        try {
          throw i;
        } catch (ii) {
          setTimeout(function() {
            createBomb4();
            //console.log(ii);
          }, 1000);
        }
        try {
          throw i;
        } catch (ii) {
          setTimeout(function() {
            createBomb5();
            //console.log(ii);
          }, 2000);
        }
        try {
          throw i;
        } catch (ii) {
          setTimeout(function() {
            createBomb6();
            //console.log(ii);
          }, 5000);
        }
        try {
          throw i;
        } catch (ii) {
          setTimeout(function() {
            createBomb7();
            //console.log(ii);
          }, 10000);
        }
      }
      //if snake hits the bomb
    } else if (
      (snakeX == bomb.x && snakeY == bomb.y) ||
      (snakeX == bomb2.x && snakeY == bomb2.y) ||
      (snakeX == bomb3.x && snakeY == bomb3.y) ||
      (snakeX == bomb4.x && snakeY == bomb4.y) ||
      (snakeX == bomb5.x && snakeY == bomb5.y) ||
      (snakeX == bomb6.x && snakeY == bomb6.y)
    ) {
      console.log("GAME OVER! YOU SCORED: " + score);
      alert("GAME OVER! YOU SCORED: " + score);
      btn3.removeAttribute("disabled", true);
      ctx.clearRect(0, 0, w, h);
      gameloop = clearInterval(gameloop);
      score = 0;
      return;
    } else {
      var tail = snake.pop(); //pops out the last cell
      tail.x = snakeX;
      tail.y = snakeY;
    }
    //The snake can now eat the food.
    snake.unshift(tail); //puts back the tail as the first cell
    for (var i = 0; i < snake.length; i++) {
      bodySnake(snake[i].x, snake[i].y);
    }
    eats(food.x, food.y);
    bombs(bomb.x, bomb.y);
    bombs2(bomb2.x, bomb2.y);
    bombs3(bomb3.x, bomb3.y);
    bombs4(bomb4.x, bomb4.y);
    bombs5(bomb5.x, bomb5.y);
    bombs6(bomb6.x, bomb6.y);
    bombs7(bomb7.x, bomb7.y);
    scoreText();
  }
  //creates the food
  function createFood() {
    food = {
      x: Math.floor(Math.random() * 30 + 1),
      y: Math.floor(Math.random() * 30 + 1)
    };
    for (var i = 0; i > snake.length; i++) {
      var snakeX = snake[i].x;
      var snakeY = snake[i].y;
      if (
        (food.x === snakeX && food.y === snakeY) ||
        (food.y === snakeY && food.x === snakeX)
      ) {
        food.x = Math.floor(Math.random() * 30 + 1);
        food.y = Math.floor(Math.random() * 30 + 1);
      }
    }
  }
  //creates the bomb
  function createBomb() {
    bomb = {
      x: Math.floor(Math.random() * 30 + 1),
      y: Math.floor(Math.random() * 30 + 1)
    };
    //console.log(bomb.x, bomb.y);
    for (var i = 0; i > snake.length; i++) {
      var snakeX = snake[i].x;
      var snakeY = snake[i].y;
      if (
        (bomb.x === snakeX && bomb.y === snakeY) ||
        (bomb.y === snakeY && bomb.x === snakeX)
      ) {
        bomb.x = Math.floor(Math.random() * 30 + 1);
        bomb.y = Math.floor(Math.random() * 30 + 1);
      }
    }
  }

  function createBomb2() {
    bomb2 = {
      x: Math.floor(Math.random() * 30 + 1),
      y: Math.floor(Math.random() * 30 + 1)
    };
    //console.log(bomb2.x, bomb2.y);
    for (var i = 0; i > snake.length; i++) {
      var snakeX = snake[i].x;
      var snakeY = snake[i].y;
      if (
        (bomb2.x === snakeX && bomb2.y === snakeY) ||
        (bomb2.y === snakeY && bomb2.x === snakeX)
      ) {
        bomb2.x = Math.floor(Math.random() * 30 + 1);
        bomb2.y = Math.floor(Math.random() * 30 + 1);
      }
    }
  }

  function createBomb3() {
    bomb3 = {
      x: Math.floor(Math.random() * 30 + 1),
      y: Math.floor(Math.random() * 30 + 1)
    };
    //console.log(bomb3.x, bomb3.y);
    for (var i = 0; i > snake.length; i++) {
      var snakeX = snake[i].x;
      var snakeY = snake[i].y;
      if (
        (bomb3.x === snakeX && bomb3.y === snakeY) ||
        (bomb3.y === snakeY && bomb3.x === snakeX)
      ) {
        bomb3.x = Math.floor(Math.random() * 30 + 1);
        bomb3.y = Math.floor(Math.random() * 30 + 1);
      }
    }
  }

  function createBomb4() {
    bomb4 = {
      x: Math.floor(Math.random() * 30 + 1),
      y: Math.floor(Math.random() * 30 + 1)
    };
    //console.log(bomb4.x, bomb4.y);
    for (var i = 0; i > snake.length; i++) {
      var snakeX = snake[i].x;
      var snakeY = snake[i].y;
      if (
        (bomb4.x === snakeX && bomb4.y === snakeY) ||
        (bomb4.y === snakeY && bomb4.x === snakeX)
      ) {
        bomb4.x = Math.floor(Math.random() * 30 + 1);
        bomb4.y = Math.floor(Math.random() * 30 + 1);
      }
    }
  }

  function createBomb5() {
    bomb5 = {
      x: Math.floor(Math.random() * 30 + 1),
      y: Math.floor(Math.random() * 30 + 1)
    };
    //console.log(bomb5.x, bomb5.y);
    for (var i = 0; i > snake.length; i++) {
      var snakeX = snake[i].x;
      var snakeY = snake[i].y;
      if (
        (bomb5.x === snakeX && bomb5.y === snakeY) ||
        (bomb5.y === snakeY && bomb5.x === snakeX)
      ) {
        bomb5.x = Math.floor(Math.random() * 30 + 1);
        bomb5.y = Math.floor(Math.random() * 30 + 1);
      }
    }
  }

  function createBomb6() {
    bomb6 = {
      x: Math.floor(Math.random() * 30 + 1),
      y: Math.floor(Math.random() * 30 + 1)
    };
    //console.log(bomb6.x, bomb6.y);
    for (var i = 0; i > snake.length; i++) {
      var snakeX = snake[i].x;
      var snakeY = snake[i].y;
      if (
        (bomb6.x === snakeX && bomb6.y === snakeY) ||
        (bomb6.y === snakeY && bomb6.x === snakeX)
      ) {
        bomb6.x = Math.floor(Math.random() * 30 + 1);
        bomb6.y = Math.floor(Math.random() * 30 + 1);
      }
    }
  }
  function createBomb7() {
    bomb7 = {
      x: Math.floor(Math.random() * 30 + 1),
      y: Math.floor(Math.random() * 30 + 1)
    };
    //console.log(bomb7.x, bomb7.y);
    for (var i = 0; i > snake.length; i++) {
      var snakeX = snake[i].x;
      var snakeY = snake[i].y;
      if (
        (bomb7.x === snakeX && bomb7.y === snakeY) ||
        (bomb7.y === snakeY && bomb7.x === snakeX)
      ) {
        bomb7.x = Math.floor(Math.random() * 30 + 1);
        bomb7.y = Math.floor(Math.random() * 30 + 1);
      }
    }
  }

  function checkCollision(x, y, array) {
    for (var i = 0; i < array.length; i++) {
      if (array[i].x === x && array[i].y === y) return true;
    }
    return false;
  }

  function init() {
    direction = "down";
    drawSnake();
    createFood();
    createBomb();
    createBomb2();
    createBomb3();
    createBomb4();
    createBomb5();
    createBomb6();
    createBomb7();
    gameloop = setInterval(paint, counter);
  }
  return {
    init: init
  };
})();
//start button and controls for game
(function(window, document, drawModule, undefined) {
  var btn3 = document.getElementById("btn3");
  btn3.addEventListener("click", function() {
    drawModule.init();
  });
  document.keydown = function(event) {
    keyCode = window.event.keyCode;
    keyCode = event.keyCode;
    switch (keyCode) {
      case 65:
        if (direction != "right") {
          direction = "left";
        }
        break;
      case 68:
        if (direction != "left") {
          direction = "right";
        }
        break;
      case 87:
        if (direction != "down") {
          direction = "up";
        }
        break;
      case 83:
        if (direction != "up") {
          direction = "down";
        }
        break;
    }
  };
  document.addEventListener("keydown", document.keydown, false);
})(window, document, drawModule);
