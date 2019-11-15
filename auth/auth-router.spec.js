const Users = require("../database/db-model");
const db = require("../database/dbConfig");

beforeEach(() => {
  return db("users").truncate();
});

describe("users model", () => {
  describe("register user", () => {
    it("should register user", async () => {
      await Users.register({
        username: "user5",
        password: "1234",
     
      });
      await Users.register({
        username: "paco",
        password: "1234",
      
      });

      const users = await db("users");
      expect(users).toHaveLength(2);
    });

    it("should not post user with an existing name", async () => {
        try {
          await Users.register({
            username: "paco",
            password: "1234",
           
          });
          await Users.register({
        username: "paco",
        password: "1234g",
       
      });
        } catch (error) {
          expect(error.code).toBe('SQLITE_ERROR');
        }
      });
  });
});
