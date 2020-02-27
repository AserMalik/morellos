/*var data = "";

let requestURL = 'http://ddragon.leagueoflegends.com/cdn/10.4.1/data/en_US/item.json';
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.onload = function() {
  data = JSON.parse(request.responseText);
  funkWithData(data);
}
request.send();

function funkWithData(itemsList){
  console.log(itemsList.data['1001']);
}*/

/*function httpDataExtraction(url, callback) {
  https.get(url, function(response) {
    let body = '';
    response.on('data', (chunk) => { body += chunk; });
    response.on('end', () => {
      try {
        return JSON.parse(body);
      } catch (error) {
        console.error(error.message);
      }
    }).on('error', (e) => {
      console.error(`Got error: ${e.message}`);
    });
  });
}*/

//var version = httpDataExtraction[0];
//console.log(version);

/*url = 'https://ddragon.leagueoflegends.com/cdn/10.4.1/data/en_US/item.json';
https.get(url, function(response){
    let body = '';

    response.setEncoding('utf8');
    response.on('data', (chunk) => { body += chunk; });

    response.on('end', () => {
      try {
        itemsList = JSON.parse(body);
        whyAreYouBuildingMorello(itemsList.version);
      } catch (error) {
        console.error(error.message);
      }
    });
}).on('error', (error) => {
      console.error(error.message);
});

function whyAreYouBuildingMorello(JSONObject){
  console.log(JSONObject);
}*/
