const express = require("express");
const cors = require("cors");
const app = express();

const {
  controlPokemon,
  controlFriends,
  controlWow,
  controlLotr,
  controlHarryPotter,
  controlBigBang,
} = require("./Controllers/allControllers");
const morgan = require("morgan");
app.use(cors());
app.use(morgan("dev"));

app.use("/api/v1/pokemon", controlPokemon);
app.use("/api/v1/friends", controlFriends);
app.use("/api/v1/wow", controlWow);
app.use("/api/v1/lotr", controlLotr);
app.use("/api/v1/harrypotter", controlHarryPotter);
app.use("/api/v1/bigbang", controlBigBang);
module.exports = app;
