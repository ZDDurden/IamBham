let time;
function msg(str) {
  console.log(str);
}
msg("Hello");
setTimeout(function() {
  msg("Bye");
}, 2000);

function getWords(word1, word2, word3, word4) {
  console.log(word1);
  setTimeout(function() {
    console.log(word2);
  }, 3000);
  setTimeout(function() {
    console.log(word3);
  }, 5000);
  setTimeout(function() {
    console.log(word4);
  }, 6000);
}
getWords("Hello", "Hey", "Hi", "Huh");

function done() {
  console.log("Job's done!");
}
function countdown(num, callback) {
  console.log(num);
  if (num > 1) {
    setTimeout(() => {
      num--;
      countdown(num, callback);
    }, 1000);
  } else {
    return callback();
  }
}
countdown(9, done);

let lunchTime = true;
let lunch = {
  lunch: "Burger",
  drink: "Coke"
};
const orderMeSomeFood = () => {
  return new Promise((resolve, reject) => {
    let err = new Error("Nope");
    if (lunchTime === true) {
      resolve(console.log(lunch));
    } else {
      reject(err);
    }
  });
};
orderMeSomeFood()
  .then(function() {
    return lunch;
  })
  .catch(function(err) {
    console.log(err);
  });
