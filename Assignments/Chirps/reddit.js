const fs = require("fs");
const rp = require("request-promise");

exports.rdt = async function() {
  const options = {
    method: "GET",
    uri: "https://www.reddit.com/r/popular.json",
    json: true
  };

  rp(options)
    .then(function(data) {
      let redditArr = [];
      redditArr.push(data),
        fs.writeFile("./popular-articles.json", JSON.stringify(redditArr)),
        console.log(redditArr);
    })
    .catch(handleError);
}

