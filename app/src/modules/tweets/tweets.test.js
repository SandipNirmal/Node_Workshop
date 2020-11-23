import request from "supertest";
import app from "../../";
import {
  createDummyUser,
  deleteAllTweets,
  deleteAllUsers,
  dummy_users,
} from "../../testUtils";
import { findUserByEmail } from "../users/store";
import { generateJWT } from "../../utils";

beforeAll(async () => {
  console.log("Setting up...");
  await deleteAllTweets();
  await createDummyUser();
});

afterAll(async () => {
  console.log("Cleaning up...");
  await deleteAllUsers();
});

describe("Tweet APIs", () => {
  describe("Add Tweet", () => {
    it("Unauthorised user", async (done) => {
      const res = await request(app)
        .post("/api/tweets")
        .send({ content: "Test Tweet!" })
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(401);

      expect(res.body.errors.message).toBe("No authorization token was found");
      done();
    });
  });

  it("Success", async (done) => {
    const { id, email } = await findUserByEmail(dummy_users[0].email);

    request(app)
      .post("/api/tweets")
      .send({ content: "Test Tweet!" })
      .set({
        Accept: "application/json",
        Authorization: `Bearer ${generateJWT(id, email)}`,
      })
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});
