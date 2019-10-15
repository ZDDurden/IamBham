window.addEventListener("DOMContentLoaded", () => {
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
  let frBtn = document.getElementById("ulBtn");
  let list = document.getElementById("friendList");
  let nameBtn = document.getElementById("nameBtn");
  let nameDiv = document.getElementById("nameDiv");
  let some = document.getElementById("some");
  let msg = document.getElementById("msg");
  let bdy = document.getElementById("bdy");
  let btn = document.createElement("button");
  btn.innerText = "Button";
  bdy.appendChild(btn);
  btn.addEventListener("click", () => {
    alert("Nice");
  });
  document.getElementById("sub").addEventListener("click", function() {
    alert(msg.value);
  });
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  some.addEventListener("click", () => {
    some.style.color = getRandomColor();
  });
  nameBtn.addEventListener("click", () => {
    let spn = document.createElement("span");
    let spnT = document.createTextNode("Zach");
    spn.appendChild(spnT);
    nameDiv.appendChild(spn);
  });
  frBtn.addEventListener("click", () => {
    frArr.forEach(function(friend) {
      let li = document.createElement("li");
      let each = document.createTextNode(friend);
      li.appendChild(each);
      list.appendChild(li);
    });
  });
});
