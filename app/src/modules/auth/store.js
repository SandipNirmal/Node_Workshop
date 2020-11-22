import { query_one } from "../../db";

const USER_PROJECTION =
  "id, firstname, lastname, display_name, email, password, bio";

export async function authenticateUser({ email }) {
  const loginQuery = `SELECT ${USER_PROJECTION} FROM user_accounts WHERE email=$1`;

  try {
    const { rowCount, ...user } = await query_one(loginQuery, [email]);
    return user;
  } catch (e) {
    throw new Error(e);
  }
}
