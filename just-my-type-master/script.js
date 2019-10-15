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
    $("#32").css("background-color", "grey");
  } else {
    $(`span:contains('${e.key}')`).css("background-color", "grey");
  }
});
$(document).keydown(function(e) {
  switch (e.which) {
    case 32:
      $yellowBlock.stop().animate({
        left: "+=17"
      });
      break;
  }
  switch (e.key) {
    case e.key:
      $yellowBlock.stop().animate({
        left: "+=17"
      });
      break;
  }
});
