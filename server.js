var https = require('https')
var url = 'https://ddragon.leagueoflegends.com/api/versions.json';

function httpDataExtraction(url, callback) {
  var body = '';
  https.get(url, function(response) {
    response.on('data', (chunk) => { body += chunk; });
    response.on('end', () => {
      try {
        callback(body);
      } catch (error) {
        console.error(error.message);
      }
    }).on('error', (error) => {
      console.error(`Got error: ${error.message}`);
    });
  });
}

function getPatchVersion(url) {
  var currentVersion;
  httpDataExtraction(url, (body) => {
    let result= JSON.parse(body);
    currentVersion = result[0];
    url = 'https://ddragon.leagueoflegends.com/cdn/' + currentVersion + '/data/en_US/item.json';
    //console.log(url);
    httpDataExtraction(url, (body) => {
      let result = JSON.parse(body);
      //console.log(result.type);
      console.log(Object.keys(result.data).length);
      for (var k in result.data){
        if (Object.keys(result.data[k].stats).length != 0){
          console.log("Item name: ", result.data[k].name, " stats: ", result.data[k].stats);
        }
        //console.log("Item name:result.data[k].stats);
      }
    });
  });
}

getPatchVersion(url); //this currently runs the whole update process in waterfall fashion



