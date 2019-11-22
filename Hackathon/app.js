var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use("/assets", express.static("assets"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.get("/snake", function(req, res) {
  res.sendFile(__dirname + "/views/snake.html");


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));