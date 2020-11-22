import { query_one, query } from "../../db";

export async function addTweet({ id, userId, content }) {
  const addTweetQuery = `INSERT INTO tweets
  (id, user_id, text_content)
  VALUES ($1, $2, $3) returning id`;

  const values = [id, userId, content];

  try {
    const { id } = await query_one(addTweetQuery, values);

    return id;
  } catch (e) {
    throw new Error(e);
  }
}

export async function listTweets() {
  const listTweets = `SELECT t.id, t.text_content, t.user_id, ua.display_name as author, t.created
  FROM tweets t
  INNER JOIN user_accounts ua on ua.id = t.user_id
  ORDER BY t.created DESC`;

  try {
    const { rows: tweets } = await query(listTweets, []);

    return tweets;
  } catch (e) {
    throw new Error(e);
  }
}

export async function getTweetById(id) {
  const getTweet = `SELECT t.id, t.text_content, t.user_id, ua.display_name as author, t.created
  FROM tweets t
  INNER JOIN user_accounts ua on ua.id = t.user_id
  WHERE t.id=$1`;

  try {
    const { rowCount, ...tweet } = await query_one(getTweet, [id]);

    return tweet;
  } catch (e) {
    throw new Error(e);
  }
}
