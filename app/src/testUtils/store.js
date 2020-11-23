import { query } from "../db";

export async function deleteAllUsers() {
  const QUERY = "DELETE FROM user_accounts";
  await query(QUERY, []);
}

export async function deleteAllTweets() {
  const QUERY = "DELETE FROM tweets";
  await query(QUERY, []);
}
