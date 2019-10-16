let $btn = $("<button>Button</button>");
let $ipt = $("#msg");
let $sub = $("#sub");
let $some = $("#some");
let $nameBtn = $("#nameBtn");
let $nameDiv = $("#nameDiv");
let $spn = $("<span>Zach</span>");
let $ul = $("#ulBtn");
let $list = $("#friendList");
let frArr = [
  "Jim",
  "Joe",
  "Jane",
  "Jack",
  "Jerry",
  "Mark",
  "April",
  "Carl",
  "Phil",
  "Don"
];
$("body").prepend($btn);
$btn.click(() => {
  alert("Nice");
});
$sub.click(() => {
  alert($ipt.val());
});
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
$some.click(() => {
  $some.css("color", getRandomColor());
});
$nameBtn.click(() => {
  $nameDiv.append($spn);
});
$ul.click(() => {
  frArr.forEach(i => {
    let $fr = $("<li>" + i + "</li>");
    $list.append($fr);
  });
});
