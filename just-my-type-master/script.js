const sentences = [
  "ten ate neite ate nee enet ite ate inet ent eate",
  "Too ato too nOt enot one totA not anot tOO aNot",
  "oat itain oat tain nate eate tea anne inant nean",
  "itant eate anot eat nato inate eat anot tain eat",
  "nee ene ate ite tent tiet ent ine ene ete ene ate"
];
let sentenceIndex = 0;
let letterIndex = 0;
let keyCount = 0;
let wordCount = 54;
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
  console.log(keyCode);
  if (keyTimer < 1) {
    //starts the timer
    timeStart = event.timeStamp;
    keyTimer++;
  }
  //access the indexes in the sentences array
  let currentSentence = sentences[sentenceIndex];
  let currentLetter = currentSentence[letterIndex];
  letterIndex++;
  let nextLetter = currentSentence[letterIndex];
  $("#target-letter").text(nextLetter);
  //move the yellow block
  $("#yellow-block").animate(
    { left: "+=17px" },
    { duration: 100, easing: "linear" }
  );
  if (sentenceIndex < sentences.length) {
    if (letterIndex < currentSentence.length) {
      //adds the check and x characters
      if (keyCode === currentLetter.charCodeAt()) {
        $("#feedback").append('<span class="glyphicon glyphicon-ok"></span>');
      } else if (keyCode !== currentLetter.charCodeAt()) {
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
      timeEnd = event.timeStamp;
      //sets up the post game screen
      let difference = timeEnd - timeStart;
      let minutes = difference / 1000 / 60;
      let grossWordsPerMinute = keyCount / 5 / minutes;
      $("#sentence, #target-letter, #feedback").empty();
      $(
        "#yellow-block, #keyboard-upper-container, #keyboard-lower-container, #space-key-container"
      ).hide();
      let scores = `
                  <strong>WPM:</strong> <span">${grossWordsPerMinute.toFixed(
                    2
                  )}</span><br>
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
        $("#noBtn")
          .delay(500)
          .fadeOut(500);
      });
    }
  }
});
