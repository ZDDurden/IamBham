const path = require("path");
const fs = require("fs");
const chrp = require("../chirps.json");
const rdt = require("../reddit.js");

rdt.rdt();

// console.log(chrp);

// fs.readFile("../chirps.json", (err, data) => {
//   if (err) throw err;
//   let chirps = JSON.parse(data);
//   console.log(chirps);
// });
