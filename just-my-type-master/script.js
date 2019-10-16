
$("#keyboard-upper-container").hide();
let $yellowBlock = $("#yellow-block");
const $sentences = [
  "ten ate neite ate nee enet ite ate inet ent eate",
  "Too ato too nOt enot one totA not anot tOO aNot",
  "oat itain oat tain nate eate tea anne inant nean",
  "itant eate anot eat nato inate eat anot tain eat",
  "nee ene ate ite tent tiet ent ine ene ete ene ate"
];
$("#sentence").append($sentences[0]);
$(document).keydown(function(event) {
  if (event.which === 16) {
    $("#keyboard-upper-container").toggle();
    $("#keyboard-lower-container").toggle();
  }
});
$(document).keyup(function(event) {
  if (event.which === 16) {
    $("#keyboard-upper-container").toggle();
    $("#keyboard-lower-container").toggle();
  }
});
$(document).keydown(function(e) {
  if (e.which === 32) {
    $("#32").css("background-color", "palegoldenrod");
  } else {
    $(`span:contains('${e.key}')`).css("background-color", "palegoldenrod");
  }
});
$(document).keyup(function(e) {
  if (e.which === 32) {
    $("#32").css("background-color", "rgb(245, 245, 245)");
  } else {
    $(`span:contains('${e.key}')`).css(
      "background-color",
      "rgb(245, 245, 245)"
    );
  }
});
$(document).keydown(function(e) {
  switch (e.which) {
    case 32:
      $yellowBlock.stop().animate({
        left: "+=21"
      });
      break;
  }
  switch (e.key) {
    case e.key:
      $yellowBlock.stop().animate({
        left: "+=21"
      });
      break;
  }
});
$(document).keydown(function(e) {
  if (e.which === 13) {
    nextSentence();
  }
});
function nextSentence() {
  for (let i = 0; i < $sentences.length; i++) {
    if ($sentences[i] < $sentences.length - 1) {
      $(document).keydown(function(e) {
        if (e.which === 32) {
          $("#sentence").append($sentences[i]);
          i++;
          resetYellow();
        } else {
          console.log(e.which);
          $("#sentence").append($sentences[4]);
          resetYellow();
        }
      });
    }
  }
}
nextSentence();
function resetYellow() {
  if (nextSentence() === true) {
    $yellowBlock.removeAttr("style");
  }
}
$(document).on("keydown", e => {
  for (let i = 0; i < $sentences.length; i++) {
    for (let j = 0; j < $sentences.length; j++) {
      if (e.keyCode === $sentences[i][j].charCodeAt()) {
        console.log(e.keyCode);
        $("#feedback").append(`<span class='glyphicon glyphicon-ok'></span>`);
      } else if (e.keyCode != $sentences[i][j].charCodeAt()) {
        console.log(e.keyCode);
        $("#feedback").append(
          `<span class='glyphicon glyphicon-remove'></span>`
        );
      }
    }
  }
});
/*
$(document).ready(() => {
  const sentences = [
    `ten ate neite ate nee enet ite ate inet ent eate`,
    `Too ato too nOt enot one totA not anot tOO aNot`,
    `oat itain oat tain nate eate tea anne inant nean`,
    `itant eate anot eat nato inate eat anot tain eat`,
    `nee ene ate ite tent tiet ent ine ene ete ene ate`
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

  $(`#keyboard-upper-container`).hide();
  $(`#tryAgain, #yesNoBtns, #yesBtn, #noBtn`).hide();

  $(document)
    .on(`keydown`, event => {
      if (event.which === 16 || event.which === 20) {
        $(`#keyboard-upper-container, #keyboard-lower-container`).toggle();
      }
    })
    .on(`keyup`, event => {
      if (event.which === 16 || event.which === 20) {
        $(`#keyboard-lower-container, #keyboard-upper-container`).toggle();
      }
      $(`.highlight`).removeClass(`highlight`);
    });
  $(document).on(`keypress`, event => {
    keyCount++;

    let keyCode = event.which;
    $(`#${keyCode}`).addClass(`highlight`);

    if (keyTimer < 1) {
      timeStart = event.timeStamp;
      keyTimer++;
    }
    let currentSentence = sentences[sentenceIndex];
    let currentLetter = currentSentence[letterIndex];
    letterIndex++;
    let nextLetter = currentSentence[letterIndex];
    $(`#target-letter`).text(nextLetter);
    $(`#yellow-block`).animate(
      { left: `+=17px` },
      { duration: 100, easing: `linear` }
    );
    if (sentenceIndex < sentences.length) {
      if (letterIndex < currentSentence.length) {
        if (keyCode === currentLetter.charCodeAt()) {
          $(`#feedback`).append(`<span class='glyphicon glyphicon-ok'></span>`);
        } else if (keyCode !== currentLetter.charCodeAt()) {
          $(`#feedback`).append(
            `<span class='glyphicon glyphicon-remove'></span>`
          );
          mistakeCount++;
        }
      } else if (sentenceIndex < sentences.length - 1) {
        $(`#feedback`).empty();
        sentenceIndex++;
        $(`#sentence`).text(sentences[sentenceIndex]);
        $(`#target-letter`).text(sentences[sentenceIndex].charAt(0));
        letterIndex = 0;
        $(`#yellow-block`).animate(
          { left: `15px` },
          { duration: 100, easing: `linear` }
        );
      } else if (sentenceIndex < sentences.length) {
        timeEnd = event.timeStamp;
        let difference = timeEnd - timeStart;
        let seconds = difference / 1000;
        let minutes = difference / 1000 / 60;
        let grossWordsPerMinute = keyCount / 5 / minutes;
        let netSpeed = (keyCount / 5 - mistakeCount) / minutes;
        let accuracy = (netSpeed / grossWordsPerMinute) * 100;
        $(`#sentence, #target-letter, #feedback`).empty();
        $(
          `#yellow-block, #keyboard-upper-container, #keyboard-lower-container, #space-key-container`
        ).hide();
        let scores = `
                  <strong>Word Count:</strong> <span style="background-color: rgba(255, 201, 4, 0.500); border-radius: 0.25rem;">${wordCount}</span><br>
                  <strong>Typed Entries:</strong> <span style="background-color: rgba(255, 201, 4, 0.500); border-radius: 0.25rem;">${keyCount}</span><br>
                  <strong>Uncorrected Errors:</strong> <span style="background-color: rgba(255, 201, 4, 0.500); border-radius: 0.25rem;">${mistakeCount}</span><br>
                  <strong>Seconds:</strong> <span style="background-color: rgba(255, 201, 4, 0.500); border-radius: 0.25rem;">${seconds.toFixed(
                    2
                  )}</span><br>
                  <strong>Minutes:</strong> <span style="background-color: rgba(255, 201, 4, 0.500); border-radius: 0.25rem;">${minutes.toFixed(
                    2
                  )}</span><br>
                  <strong>Gross WPM:</strong> <span style="background-color: rgba(255, 201, 4, 0.500); border-radius: 0.25rem;">${grossWordsPerMinute.toFixed(
                    2
                  )}</span><br>
                  <strong>Net Speed:</strong> <span style="background-color: rgba(255, 201, 4, 0.500); border-radius: 0.25rem;">${netSpeed.toFixed(
                    2
                  )}</span><br>
                  <strong>Accuracy:</strong> <span style="background-color: rgba(255, 201, 4, 0.500); border-radius: 0.25rem;">${accuracy.toFixed(
                    2
                  )}%</span>
              `;
        $(`#sentence`)
          .addClass(`text-center mt-4`)
          .append(scores)
          .hide()
          .delay(250)
          .fadeIn(250);
        $(`#tryAgain, #yesNoBtns, #yesBtn, #noBtn`)
          .hide()
          .delay(500)
          .fadeIn(1500);
        $(`#yesBtn`).on("click", () => {
          location.reload();
        });
        $(`#noBtn`).on("click", () => {
          $(`#tryAgain, #yesNoBtns, #yesBtn, #noBtn`)
            .delay(500)
            .fadeOut(1500);
        });
      }
    }
  });
});
*/