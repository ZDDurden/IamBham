const express = require("express");
const chirpStore = require("../chirpstore");

let router = express.Router();

router.get("/", (req, res) => {
  res.json(chirpStore.getChirp());
});

router.post("/", (req, res) => {
  chirpStore.createChirp(req.body);
  res.sendStatus(200);
});

module.exports = router;
