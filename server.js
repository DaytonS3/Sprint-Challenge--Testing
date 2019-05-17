const express = require("express");
const server = express();
const db = require("./data/dbHelpers");

server.use(express.json());

server.get("/", (req, res) => {
  res.send("Sever Running...");
});

server.get("/api/games", (req, res) => {
  db.Get()
    .then(game => {
      res.status(200).json(game);
    })
    .catch(err => {
      res.status(500).json({ error: "Error getting games." });
    });
});

server.post("/api/games", (req, res) => {
  db.Add(req.body)
    .then(game => {
      res.status(200).json(game);
    })
    .catch(err => {
      res.status(500).json({ error: "Error posting car" });
    });
});

module.exports = server;
