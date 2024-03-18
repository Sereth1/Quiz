const fs = require("fs");

exports.pokemon = JSON.parse(
  fs.readFileSync(`${__dirname}../../Data/Pokemon.json`)
);
exports.harryPotter = JSON.parse(
  fs.readFileSync(`${__dirname}../../Data/HarryPotter.json`)
);
exports.friends = JSON.parse(
  fs.readFileSync(`${__dirname}../../Data/Friends.json`)
);
exports.lotr = JSON.parse(fs.readFileSync(`${__dirname}../../Data/Lotr.json`));
exports.wow = JSON.parse(fs.readFileSync(`${__dirname}../../Data/Wow.json`));
exports.bigBang = JSON.parse(
  fs.readFileSync(`${__dirname}../../Data/BigBang.json`)
);
