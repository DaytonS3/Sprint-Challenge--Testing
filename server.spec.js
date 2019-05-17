const server = require("./server");
const request = require("supertest");

describe("sever", () => {
  describe("test", () => {
    it("true should be true", () => {
      expect(true).toBe(true);
    });
  });

  describe("get / ", () => {
    it("should return a status 200 on success", () => {
      return request(server)
        .get("/")
        .expect(200);
    });
  });

  describe("get /api/games", () => {
    it("should return status code of 200 on success", () => {
      return request(server)
        .get("/api/games")
        .expect(200);
    });
    it("should return Json", async () => {
      const res = await request(server).get("/api/games");

      expect(res.type).toBe("application/json");
    });
    it("should return an array", async () => {
      const res = await request(server).get("/api/games");

      expect(Array.isArray(res.body)).toBeTruthy();
    });
  });

  describe("post /api/games ", () => {
    it("should return a status 200 on successful post", async () => {
      const game = {
        title: "testGame",
        genre: "testGenre",
        releaseYear: 2019
      };
      const res = await request(server)
        .post("/api/games")
        .send(game);

      expect(res.status).toBe(200);
    });

    it("should return a status 422 on incomplete post", async () => {
      const game = {
        title: "testGame",
        releaseYear: 2019
      };
      const res = await request(server)
        .post("/api/games")
        .send(game);

      expect(res.status).toBe(422);
    });
    it("should return a status 500 on failed post", async () => {
      const game = {
        title: "testGame",
        genre: "testGenre",
        releaseYear: 2019,
        invalid: "invalidPost"
      };
      const res = await request(server)
        .post("/api/games")
        .send(game);

      expect(res.status).toBe(500);
    });
  });
});
