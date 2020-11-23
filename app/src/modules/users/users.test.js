import request from "supertest";

import app from "../../";
import { createDummyUser, deleteAllUsers, dummy_users } from "../../testUtils";
import { getUserById } from "./store";

afterAll(async () => {
  console.log("Cleaning up...");
  await deleteAllUsers();
});

describe("User APIS", () => {
  it("Error for invalid request body", async (done) => {
    const res = await request(app)
      .post("/api/users")
      .send({ ...dummy_users[0], email: "" })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400);

    expect(res.body.errors.message).toBe(
      'Validation error: "email" is not allowed to be empty'
    );
    done();
  });

  it("Duplicate entry", async (done) => {
    await createDummyUser();

    const res = await request(app)
      .post("/api/users")
      .send({ ...dummy_users[0] })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400);

    expect(res.body.msg).toBe("User already exists!");
    done();
  });

  it("Success", async (done) => {
    const res = await request(app)
      .post("/api/users")
      .send({ ...dummy_users[1] })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);

    const user = await getUserById(res.body.userId);

    expect(user.email).toBe(dummy_users[1].email);
    // TODO - Compare password hash
    done();
  });
});
