const fs = require("fs");
const rp = require("request-promise");

async function rdt() {
  await rp({
    method: "GET",
    uri: "https://www.reddit.com/r/popular.json",
    headers: {
      "User-Agent": "Request-Promise"
    },
    json: true
  })
    .then(body => {
      // console.log(body);
      let redditArr = [];
      body.data.children.forEach(stuff => {
        let title = stuff.data.title;
        let author = stuff.data.author;
        let url = stuff.data.url;

        redditArr.push({ title, author, url }),
          fs.writeFile(
            "../popular-articles.json",
            JSON.stringify(redditArr),
            err => {
              if (err) {
                throw err;
              }
            }
          );
        console.log(redditArr);
      });
    })
    .catch(function(err) {
      console.log("err");
    });
}

module.exports.rdt = rdt;
