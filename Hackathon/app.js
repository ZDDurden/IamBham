var express = require("express");
const path = require('path');
var bodyParser = require("body-parser");
var app = express();

// app.use("/client", express.static("/client"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(express.static(path.join(__dirname + '/client')));
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/login.html");
});
app.get("/dash", function(req, res) {
  res.sendFile(__dirname + "/client/index.html");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));