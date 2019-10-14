window.addEventListener("DOMContentLoaded", () => {
  let i;
  const body = document.getElementById("body");
  const btn = document.getElementsByClassName("btn")[0];
  const list = document.querySelectorAll("li");
  const newDiv = document.createElement("div");
  const newText = document.createElement("h1");
  const h1Text = document.createTextNode("This is an h1");
  const newH2 = document.createElement("h2");
  const h2Text = document.createTextNode("This is an h2");
  const newH3 = document.createElement("h3");
  const h3Text = document.createTextNode("This is an h3");
  const newH4 = document.createElement("h4");
  const h4Text = document.createTextNode("This is an h4");
  const newH5 = document.createElement("h5");
  const h5Text = document.createTextNode("This is an h5");
  const newH6 = document.createElement("h6");
  const h6Text = document.createTextNode("This is an h6");
  newText.className = "h1";
  newH2.className = "h2";
  newH3.className = "h3";
  newH4.className = "h4";
  newH5.className = "h5";
  newH6.className = "h6";
  newH2.appendChild(h2Text);
  newH3.appendChild(h3Text);
  newH4.appendChild(h4Text);
  newH5.appendChild(h5Text);
  newH6.appendChild(h6Text);
  newText.appendChild(h1Text);
  newDiv.appendChild(newText);
  newDiv.appendChild(newH2);
  newDiv.appendChild(newH3);
  newDiv.appendChild(newH4);
  newDiv.appendChild(newH5);
  newDiv.appendChild(newH6);
  body.appendChild(newDiv);
  const newList = document.createElement("ul");
  newDiv.appendChild(newList);
  const colorArr = [
    "blue",
    "green",
    "red",
    "black",
    "grey",
    "orange",
    "pink",
    "purple"
  ];
  function getColor() {
    for (let i = 0; i < colorArr.length; i++) {
      let color = colorArr[Math.floor(Math.random() * 8)];
      return color;
    }
  }
  newText.addEventListener("dblclick", () => {
    newText.style.color = getColor();
  });
  newH2.addEventListener("dblclick", () => {
    newH2.style.color = getColor();
  });
  newH3.addEventListener("dblclick", () => {
    newH3.style.color = getColor();
  });
  newH4.addEventListener("dblclick", () => {
    newH4.style.color = getColor();
  });
  newH5.addEventListener("dblclick", () => {
    newH5.style.color = getColor();
  });
  newH6.addEventListener("dblclick", () => {
    newH6.style.color = getColor();
  });
  let listArr = [];
  btn.addEventListener("click", () => {
    let newItem = document.createElement("li");
    let newNum = document.createTextNode("This is list item ");
    listArr.push("li");
    newItem.appendChild(newNum);
    newList.appendChild(newItem);
  });
  function clicking() {
    for (let i = 0; i < listArr.length; i++) {
      li.addEventListener("click", () => {
        li.style.color = getColor();
      });
    }
  }
  clicking();
  listArr.addEventListener("dblclick", () => {
    list.splice(list);
  });
});
