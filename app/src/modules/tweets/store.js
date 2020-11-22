import { query_one, query } from "../../db";

export async function addTweet({ id, userId, content }) {
  const addTweetQuery = `INSERT INTO tweets
  (id, user_id, text_content)
  VALUES $1, $2, $3 returning id`;

  const values = [id, userId, content];

  try {
    const { id } = await query_one(addTweetQuery, values);

    return id;
  } catch (e) {
    throw new Error(e);
  }
}

export async function listTweets() {
  const listTweets = `SELECT t.id, t.text_content, t.created, t.user_id, user.dispaly_name as author,
  FROM tweets t
  INNER JOIN user_accounts user on t.user_id = user.id
  ORDER BY t.created DESC`;

  try {
    const { rows: tweets } = await query(listTweets, []);

    return { tweets };
  } catch (e) {
    throw new Error(e);
  }
}

export async function getTweetById(id) {
  const getTweet = `SELECT t.id, t.text_content, t.created, t.user_id, user.dispaly_name as author,
    FROM tweets t
    INNER JOIN user_accounts user on t.user_id = user.id
    WHERE id=$1`;

  try {
    const tweet = await query_one(getTweet, []);

    return tweet;
  } catch (e) {
    throw new Error(e);
  }
}
