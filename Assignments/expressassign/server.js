var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use("/public", express.static("public"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use('/', function (req, res, next) {
  console.log('Request URL:', req.url)
  next()
})

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));