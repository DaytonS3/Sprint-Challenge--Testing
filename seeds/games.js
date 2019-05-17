exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("games")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("games").insert([
        { title: "Madden", genre: "Sports", releaseYear: 1998 },
        { title: "BlackOps", genre: "War", releaseYear: 1998 },
        { title: "Mario", genre: "Adventure", releaseYear: 1998 }
      ]);
    });
};
