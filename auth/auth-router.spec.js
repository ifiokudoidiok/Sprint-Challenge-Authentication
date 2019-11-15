const request = require("supertest");
const Users = require("../database/db-model");
const db = require("../database/dbConfig");
const server = require("../api/server");

beforeEach(() => {
  return db("users").truncate();
});

describe("users model", () => {
  describe("register user", () => {
    it("should register user", async () => {
      await Users.register({
        username: "user5",
        password: "1234"
      });
      await Users.register({
        username: "paco",
        password: "1234"
      });

      const users = await db("users");
      expect(users).toHaveLength(2);
    });

    it("should not create user with an existing name", async () => {
      try {
        await Users.register({
          username: "paco",
          password: "1234"
        });
        await Users.register({
          username: "paco",
          password: "1234g"
        });
      } catch (error) {
        expect(error.code).toBe("SQLITE_CONSTRAINT");
      }
    });

    it("should not allow incomplete credentials", async () => {
      const response = await request(server).post("/api/auth/register", {
        username: "paco"
      });

      expect(response.status).toBe(500);
    });
  });

  //--------------------LOG IN TESTS------------------------------------------------//
  describe("login user", () => {
    test("should return 500 because no credentials given", () => {
      return request(server)
        .post("/api/auth/login")
        .then(response => {
          expect(response.status).toBe(400);
        });
    });

    it("should return 500 because no user exists", async () => {
      const response = await request(server).post("/api/auth/login", {
        username: "paco",
        password: "1234"
      });

      expect(response.status).toBe(400);
    });
  });

 
  describe("jokes endpoint", () => {
    test("Should return 400 when no token provided", async () => {
      const response = await request(server).get("/api/jokes");
      expect(response.status).toBe(400);
    });
  });
});


