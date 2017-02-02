
var request = require("request"),
cheerio = require("cheerio"),
url = "https://hackedd.wufoo.com/forms/zqa07su00x2r9s/";

request(url, function(error, response, body) {
  if (!error) {
    var $ = cheerio.load(body);
    var 
  }
  else {
    console.log("We got some errors: " + error);
  }
});
