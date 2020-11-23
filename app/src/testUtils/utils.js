import { registerUser } from "../modules/users/store";

export const dummy_users = [
  {
    firstname: "Yankee",
    lastname: "Bazely",
    email: "ybazely0@va.gov",
    password: "ybazely0",
  },
  {
    firstname: "Madison",
    lastname: "Uccello",
    email: "muccello1@paypal.com",
    password: "muccello1",
  },
];

export async function createDummyUser() {
  await registerUser(dummy_users[0]);
}
