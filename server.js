const API = require('./commands.js')
const express = require('express')
const path = require('path')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 8080

app.use(cors({
  //origin: 'http://localhost:3000'
  origin: 'https://happy-rosalind-0d92ae.netlify.app'
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

//const staticResponse = [["1001","Boots of Speed",{"FlatMovementSpeedMod":25}],["1011","Giant's Belt",{"FlatHPPoolMod":380}],["1018","Cloak of Agility",{"FlatCritChanceMod":0.2}],["1026","Blasting Wand",{"FlatMagicDamageMod":40}],["1027","Sapphire Crystal",{"FlatMPPoolMod":250}],["1028","Ruby Crystal",{"FlatHPPoolMod":150}],["1029","Cloth Armor",{"FlatArmorMod":15}],["1031","Chain Vest",{"FlatArmorMod":40}],["1033","Null-Magic Mantle",{"FlatSpellBlockMod":25}],["1036","Long Sword",{"FlatPhysicalDamageMod":10}],["1037","Pickaxe",{"FlatPhysicalDamageMod":25}],["1038","B. F. Sword",{"FlatPhysicalDamageMod":40}],["1042","Dagger",{"PercentAttackSpeedMod":0.12}],["1043","Recurve Bow",{"PercentAttackSpeedMod":0.25}],["1052","Amplifying Tome",{"FlatMagicDamageMod":20}],["1053","Vampiric Scepter",{"FlatPhysicalDamageMod":15,"PercentLifeStealMod":0.1}],["1054","Doran's Shield",{"FlatHPPoolMod":80,"FlatHPRegenMod":1.2}],["1055","Doran's Blade",{"FlatPhysicalDamageMod":8,"FlatHPPoolMod":80,"PercentLifeStealMod":0.03}],["1056","Doran's Ring",{"FlatHPPoolMod":60,"FlatMagicDamageMod":15}],["1057","Negatron Cloak",{"FlatSpellBlockMod":40}],["1058","Needlessly Large Rod",{"FlatMagicDamageMod":60}],["1082","Dark Seal",{"FlatMPPoolMod":100,"FlatMagicDamageMod":10}],["1083","Cull",{"FlatPhysicalDamageMod":7}],["1400","Enchantment: Warrior",{"FlatPhysicalDamageMod":60}],["1401","Enchantment: Cinderhulk",{"FlatHPPoolMod":300}],["1402","Enchantment: Runic Echoes",{"FlatMPPoolMod":300,"FlatMagicDamageMod":80}],["1412","Enchantment: Warrior",{"FlatPhysicalDamageMod":60}],["1413","Enchantment: Cinderhulk",{"FlatHPPoolMod":300}],["1414","Enchantment: Runic Echoes",{"FlatMPPoolMod":300,"FlatMagicDamageMod":80}],["1416","Enchantment: Bloodrazor",{"PercentAttackSpeedMod":0.5}],["1419","Enchantment: Bloodrazor",{"PercentAttackSpeedMod":0.5}],["2015","Kircheis Shard",{"PercentAttackSpeedMod":0.15}],["2051","Guardian's Horn",{"FlatHPPoolMod":150,"FlatHPRegenMod":4}],["2065","Shurelya's Reverie",{"FlatHPPoolMod":300}],["2422","Slightly Magical Boots",{"FlatMovementSpeedMod":25}],["3001","Abyssal Mask",{"FlatHPPoolMod":350,"FlatSpellBlockMod":55,"FlatMPPoolMod":300}],["3003","Archangel's Staff",{"FlatMPPoolMod":650,"FlatMagicDamageMod":50}],["3004","Manamune",{"FlatPhysicalDamageMod":35,"FlatMPPoolMod":250}],["3006","Berserker's Greaves",{"FlatMovementSpeedMod":45,"PercentAttackSpeedMod":0.35}],["3007","Archangel's Staff (Quick Charge)",{"FlatMPPoolMod":650,"FlatMagicDamageMod":50}],["3008","Manamune (Quick Charge)",{"FlatPhysicalDamageMod":35,"FlatMPPoolMod":250}],["3009","Boots of Swiftness",{"FlatMovementSpeedMod":60}],["3010","Catalyst of Aeons",{"FlatHPPoolMod":225,"FlatMPPoolMod":300}],["3020","Sorcerer's Shoes",{"FlatMovementSpeedMod":45}],["3022","Frozen Mallet",{"FlatPhysicalDamageMod":30,"FlatHPPoolMod":700}],["3024","Glacial Shroud",{"FlatMPPoolMod":250,"FlatArmorMod":20}],["3025","Iceborn Gauntlet",{"FlatMPPoolMod":500,"FlatArmorMod":65}],["3026","Guardian Angel",{"FlatPhysicalDamageMod":45,"FlatArmorMod":40}],["3027","Rod of Ages",{"FlatHPPoolMod":300,"FlatMPPoolMod":300,"FlatMagicDamageMod":60}],["3028","Chalice of Harmony",{"FlatSpellBlockMod":30}],["3029","Rod of Ages (Quick Charge)",{"FlatHPPoolMod":300,"FlatMPPoolMod":300,"FlatMagicDamageMod":60}],["3030","Hextech GLP-800",{"FlatMPPoolMod":600,"FlatMagicDamageMod":80}],["3031","Infinity Edge",{"FlatPhysicalDamageMod":80,"FlatCritChanceMod":0.25}],["3033","Mortal Reminder",{"FlatPhysicalDamageMod":45}],["3035","Last Whisper",{"FlatPhysicalDamageMod":20}],["3036","Lord Dominik's Regards",{"FlatPhysicalDamageMod":45}],["3040","Seraph's Embrace",{"FlatMPPoolMod":1400,"FlatMagicDamageMod":50}],["3041","Mejai's Soulstealer",{"FlatMPPoolMod":200,"FlatMagicDamageMod":20}],["3042","Muramana",{"FlatPhysicalDamageMod":35,"FlatMPPoolMod":1000}],["3043","Muramana",{"FlatPhysicalDamageMod":35,"FlatMPPoolMod":1000}],["3044","Phage",{"FlatPhysicalDamageMod":15,"FlatHPPoolMod":200}],["3046","Phantom Dancer",{"FlatCritChanceMod":0.25,"PercentMovementSpeedMod":0.05,"PercentAttackSpeedMod":0.3}],["3047","Ninja Tabi",{"FlatMovementSpeedMod":45,"FlatArmorMod":20}],["3048","Seraph's Embrace",{"FlatMPPoolMod":1400,"FlatMagicDamageMod":50}],["3050","Zeke's Convergence",{"FlatSpellBlockMod":30,"FlatMPPoolMod":250,"FlatArmorMod":60}],["3052","Jaurim's Fist",{"FlatPhysicalDamageMod":15,"FlatHPPoolMod":200}],["3053","Sterak's Gage",{"FlatHPPoolMod":450}],["3057","Sheen",{"FlatMPPoolMod":250}],["3065","Spirit Visage",{"FlatHPPoolMod":450,"FlatSpellBlockMod":55}],["3067","Kindlegem",{"FlatHPPoolMod":200}],["3068","Sunfire Cape",{"FlatHPPoolMod":425,"FlatArmorMod":60}],["3070","Tear of the Goddess",{"FlatMPPoolMod":250}],["3071","Black Cleaver",{"FlatPhysicalDamageMod":40,"FlatHPPoolMod":400}],["3072","Bloodthirster",{"FlatPhysicalDamageMod":80}],["3073","Tear of the Goddess (Quick Charge)",{"FlatMPPoolMod":250}],["3074","Ravenous Hydra",{"FlatPhysicalDamageMod":80,"PercentLifeStealMod":0.18}],["3075","Thornmail",{"FlatHPPoolMod":250,"FlatArmorMod":80}],["3076","Bramble Vest",{"FlatArmorMod":35}],["3077","Tiamat",{"FlatPhysicalDamageMod":25}],["3078","Trinity Force",{"FlatPhysicalDamageMod":25,"PercentMovementSpeedMod":0.05,"FlatHPPoolMod":250,"FlatMPPoolMod":250,"PercentAttackSpeedMod":0.4}],["3082","Warden's Mail",{"FlatArmorMod":40}],["3083","Warmog's Armor",{"FlatHPPoolMod":800}],["3084","Overlord's Bloodmail",{"FlatHPPoolMod":800}],["3085","Runaan's Hurricane",{"FlatCritChanceMod":0.25,"PercentMovementSpeedMod":0.07,"PercentAttackSpeedMod":0.4}],["3086","Zeal",{"FlatCritChanceMod":0.25,"PercentAttackSpeedMod":0.12}],["3087","Statikk Shiv",{"FlatCritChanceMod":0.25,"PercentMovementSpeedMod":0.05,"PercentAttackSpeedMod":0.4}],["3089","Rabadon's Deathcap",{"FlatMagicDamageMod":120}],["3091","Wit's End",{"PercentMovementSpeedMod":0.05,"FlatSpellBlockMod":50,"PercentAttackSpeedMod":0.5}],["3094","Rapid Firecannon",{"FlatCritChanceMod":0.25,"PercentMovementSpeedMod":0.05,"PercentAttackSpeedMod":0.3}],["3095","Stormrazor",{"FlatPhysicalDamageMod":50,"FlatCritChanceMod":0.25,"PercentAttackSpeedMod":0.15}],["3100","Lich Bane",{"PercentMovementSpeedMod":0.07,"FlatMPPoolMod":250,"FlatMagicDamageMod":80}],["3101","Stinger",{"PercentAttackSpeedMod":0.35}],["3102","Banshee's Veil",{"FlatSpellBlockMod":60,"FlatMagicDamageMod":75}],["3105","Aegis of the Legion",{"FlatSpellBlockMod":30,"FlatArmorMod":30}],["3107","Redemption",{"FlatHPPoolMod":200}]]
app.use(express.static(path.join(__dirname, '/client/pages')));

app.get('/ping', (req, res) => {
  //return res.send(staticResponse)
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


