const API = require('./commands.js')
const express = require('express')
const path = require('path')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 8080

app.use(cors({
  origin: 'http://localhost:3000'
}));

var url = 'https://ddragon.leagueoflegends.com/api/versions.json';

async function inDevTestAPI () {
  /*retrieves current patch from DataDragon*/
  let patch = await API.getPatchVersion(url);
  /*retrieve stored patch version in cache/db here*/

  /*compare stored to actual patch version here*/

  /*if new patch, build new url*/
  let patchURL = API.getNewPatchURL(patch, 'item')
  /*retrieve new patch item list from DataDragon, as a JSON object*/
  let itemsObject = await API.getItemsObject(patchURL);
  /*perform JSON data operations*/
  let filteredItemsObject = API.filterItemsObject(itemsObject);
  return filteredItemsObject;
  /*send to cache here*/

  /*end of CRON cycle*/
}

//app.use(express.static(path.join(__dirname, '/client/pages')));

app.get('/ping', (req, res) => {
  inDevTestAPI().then((body) => {
    return res.send(body);
  });
})

app.get('*', (req, res) => {
  //return res.sendFile(path.join(__dirname+'/client/public/index.html'));
  return res.send("Sir, this is a morellos.");
})

app.listen(port, (req, res) => {  
  console.log( `server listening on port: ${port}`);
})


