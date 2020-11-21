import { query_one } from "../../db";

export async function authenticateUser({ email, password }) {
  const loginQuery =
    "SELECT * FROM user_accounts WHERE email=$1 AND password=$2";

  try {
    const user = await query_one(loginQuery, [email, password]);
    return user;
  } catch (e) {
    throw new Error(e);
  }
}
