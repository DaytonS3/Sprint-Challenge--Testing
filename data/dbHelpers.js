const db = require("./dbConfig");

module.exports = {
  Get: () => {
    return db("games");
  },

  Add: game => {
    return db("games").insert(game);
  }
};
