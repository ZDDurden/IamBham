window.addEventListener("DOMContentLoaded", () => {
  const bdy = document.getElementById("bdy");
  const friends = ["John", "Jim", "Jane", "Joe", "Jerry"];
  const btn = document.getElementById("btn");
  function linesOfCode(i) {
    for (let j = 0; j < friends.length; j++) {
      for (let i = 99; i >= 0; i--) {
        if (i >= 3) {
          i +
            " lines of code in the file, " +
            i +
            " lines of code." +
            friends[j] +
            " strikes one out, clears it all out, " +
            (i - 1) +
            " lines of code in the file.";
          i = i - 1;
        } else if (i === 2) {
          i +
            " lines of code in the file, " +
            i +
            " lines of code." +
            friends[j] +
            " strikes one out, clears it all out, " +
            (i - 1) +
            " line of code in the file.";
          i = i - 1;
        } else if (i === 1) {
          i +
            " line of code in the file, " +
            i +
            " line of code." +
            friends[j] +
            " strikes one out, clears it all out, " +
            (i - 1) +
            " lines of code in the file.";
        } else {
          ("No more lines of code.");
        }
      }
    }
  }
  btn.addEventListener("click", () => {
    for (let j = 0; j < friends.length; j++) {
      let element = document.createElement("div");
      let inDiv = document.createElement("h3");
      let h3Text = document.createTextNode(friends[j]);
      let pTag = document.createElement("p");
      let pText = document.createTextNode(`${linesOfCode(99)}`);
      pTag.appendChild(pText);
      inDiv.appendChild(h3Text);
      element.appendChild(inDiv);
      element.append(pTag);
      bdy.appendChild(element);
    }
  });
});
