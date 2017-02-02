var request = require("request"),
  cheerio = require("cheerio"),
  url = "http://www.w3schools.com/jquery/jquery_ref_html.asp";

request(url, function (error, response, body) {
  if (!error) {
    var $ = cheerio.load(body),
      test = $("h2").text();

    console.log(test);
  } else {
    console.log("Yo we got some errors: " + error);
  }
});
