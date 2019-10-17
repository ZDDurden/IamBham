const sentences = [
  "Stop talking, brain thinking.",
  "You've swallowed a planet!",
  "They're not aliens, they're Earth...liens!",
  "Fry! Stay back! He's too powerful!",
  "Yes! In your face, Gandhi!"
];
let sentenceIndex = 0;
let letterIndex = 0;
let keyCount = 0;
let wordCount = 24;
let mistakeCount = 0;
let keyTimer = 0;
let timeStart = 0;
let timeEnd = 0;
let currentSentence = sentences[0];
let currentLetter = currentSentence[0];
$("#target-letter").text(currentLetter);
$("#sentence").append(sentences[sentenceIndex]);
$("#keyboard-upper-container").hide();
$("#tryAgain, #yesNoBtns, #yesBtn, #noBtn").hide();
$(document)
  //keyboard upper and lower toggle
  .on("keydown", event => {
    if (event.which === 16 || event.which === 20) {
      $("#keyboard-upper-container, #keyboard-lower-container").toggle();
    }
  })
  .on("keyup", event => {
    if (event.which === 16 || event.which === 20) {
      $("#keyboard-lower-container, #keyboard-upper-container").toggle();
    }
    $(".highlight").removeClass("highlight");
  });
$(document).on("keypress", event => {
  keyCount++;
  //highlights the currently pressed key
  let keyCode = event.which;
  $(`#${keyCode}`).addClass("highlight");
  //console.log(keyCode);
  if (keyTimer < 1) {
    //starts the timer
    timeStart = Date.now();
    keyTimer++;
  }
  //access the indexes in the sentences array
  let currentSentence = sentences[sentenceIndex];
  let currentLetter = currentSentence[letterIndex];
  if (keyCode === currentLetter.charCodeAt()) {
    letterIndex++;
    let nextLetter = currentSentence[letterIndex];
    $("#target-letter").text(nextLetter);
    //move the yellow block
    $("#yellow-block").animate(
      { left: "+=20px" },
      { duration: 100, easing: "linear" }
    );
  }
  if (keyCode !== currentLetter.charCodeAt()) {
    $("#target-letter").text(currentLetter);
    $("#yellow-block").stop();
  }
  if (sentenceIndex < sentences.length) {
    if (letterIndex < currentSentence.length) {
      //adds the check and x characters
      if (keyCode === currentLetter.charCodeAt()) {
        $("#feedback").empty();
        $("#feedback").append('<span class="glyphicon glyphicon-ok"></span>');
      } else if (keyCode !== currentLetter.charCodeAt()) {
        $("#feedback").empty();
        $("#feedback").append(
          '<span class="glyphicon glyphicon-remove"></span>'
        );
        mistakeCount++;
      }
    } else if (sentenceIndex < sentences.length - 1) {
      //changes the sentence and resets the yellow block to the start
      $("#feedback").empty();
      sentenceIndex++;
      $("#sentence").text(sentences[sentenceIndex]);
      $("#target-letter").text(sentences[sentenceIndex].charAt(0));
      letterIndex = 0;
      $("#yellow-block").animate(
        { left: "15px" },
        { duration: 100, easing: "linear" }
      );
    } else if (sentenceIndex < sentences.length) {
      //concludes the game
      timeEnd = Date.now();
      //sets up the post game screen
      let difference = timeEnd - timeStart;
      let minutes = difference / 1000 / 60;
      let wordsPerMinute = keyCount / 5 / minutes;
      //console.log(difference);
      $("#sentence, #target-letter, #feedback").empty();
      $("#yellow-block").hide();
      $("#space-key-container").hide();
      //console.log("hide");
      $("#keyboard-upper-container").hide();
      $("#keyboard-lower-container").hide();
      //console.log("hide2");
      let scores = `
                  <strong>WPM:</strong> <span>${wordsPerMinute.toFixed()}</span><br>
                  `;
      $("#sentence")
        .addClass("text-center mt-4")
        .append(scores)
        .hide()
        .delay(250)
        .show();
      $("#tryAgain, #yesNoBtns, #yesBtn, #noBtn")
        .hide()
        .delay(500)
        .show();
      $("#yesBtn").on("click", () => {
        location.reload();
      });
      $("#noBtn").on("click", () => {
        $("#keyboard-upper-container").hide();
        $("#keyboard-lower-container").hide();
        $("#noBtn")
          .delay(500)
          .hide();
      });
    }
  }
});
