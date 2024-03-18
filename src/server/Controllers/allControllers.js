const {
  pokemon,
  lotr,
  wow,
  harryPotter,
  friends,
  bigBang,
} = require("../fsRead/fsjs");

exports.controlPokemon = async (req, res) => {
  try {
    res.status(200).send({ data: pokemon });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ message: "An error occurred", error: error.message });
  }
};
exports.controlLotr = async (req, res) => {
  try {
    res.status(200).send({ message: "success", data: lotr });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ message: "An error occurred", error: error.message });
  }
};
exports.controlWow = async (req, res) => {
  try {
    res.status(200).send({ message: "success", data: wow });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ message: "An error occurred", error: error.message });
  }
};
exports.controlHarryPotter = async (req, res) => {
  try {
    res.status(200).send({ message: "success", data: harryPotter });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ message: "An error occurred", error: error.message });
  }
};
exports.controlFriends = async (req, res) => {
  try {
    res.status(200).send({ message: "success", data: friends });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ message: "An error occurred", error: error.message });
  }
};
exports.controlBigBang = async (req, res) => {
  try {
    res.status(200).send({ message: "success", data: bigBang });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ message: "An error occurred", error: error.message });
  }
};
