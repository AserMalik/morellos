const https = require('https')

function httpsRequest (url, callback) {
  return new Promise ((resolve, reject) => {
    const request = https.get(url, (response) => {
      httpsHandleResponse(response, resolve, reject, callback);
    })
    request.on('error', reject);
    request.end();
  })
}

function httpsHandleResponse (response, resolve, reject, callback) {
  if (response.statusCode < 200 || response.statusCode >= 300) {
    return reject(new Error('statusCode=' + response.statusCode));
  }
  let body = '';
  response.on('data', (chunk) => { body += chunk; });
  response.on('end', () => {
    try {
      resolve(callback(body));
    } catch (error) {
      reject(error); //bad data potentially
    }
  });
}

async function getPatchVersion (url) {
  let patch = httpsRequest(url, (body) => {
    body = JSON.parse(body);
    return body[0];
  });
  return patch;
}

function getNewPatchURL (patch, type) {
  return 'https://ddragon.leagueoflegends.com/cdn/' + patch + '/data/en_US/' + type + '.json';
}

async function getItemsObject (url) {
  let itemsObjectJSON = httpsRequest(url, (body) => {
    let itemsObject = JSON.parse(body);
    return itemsObject;
  });
  return itemsObjectJSON;
}

function filterItemsObject (itemsObject) {
  let filteredItemsObject = []
  let i = 0;
  for (var k in itemsObject.data){
    if (Object.keys(itemsObject.data[k].stats).length == 1){  //1 stat allow only for debug purposes
      filteredItemsObject[i] = new Array(3);
      filteredItemsObject[i][0] = i                         //local id
      filteredItemsObject[i][1] = itemsObject.data[k].name  //item name
      filteredItemsObject[i][2] = itemsObject.data[k].stats //item stats
      //console.log("names here: " + filteredItemsObject[i][0] + " and stats here: " + filteredItemsObject[i][1]);
      i++;
    }
  }
  return filteredItemsObject;
}

module.exports = {
  getPatchVersion: getPatchVersion,
  getNewPatchURL: getNewPatchURL,
  getItemsObject: getItemsObject,
  filterItemsObject: filterItemsObject
}

