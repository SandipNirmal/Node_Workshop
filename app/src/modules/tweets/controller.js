import * as queries from "./store";
import { generate_uuid } from "../../utils";

/**
 * @description Create new tweet
 * @route POST | /
 */
export async function createTweet(req, res, next) {
  try {
    const {
      body: { content },
      user: { id: userId },
    } = req;

    const tweetId = await queries.addTweet({
      id: generate_uuid(),
      userId,
      content,
    });

    res.status(200).send({ id: tweetId });
  } catch (e) {
    console.log(e);
    next(e);
  }
}

/**
 * Returns all tweets
 * @route GET |
 */
export async function listTweets(req, res, next) {
  try {
    const tweets = await queries.listTweets();

    res.status(200).send({ tweets });
  } catch (e) {
    console.log(e);
    next(e);
  }
}

/**
 * Returns tweet details
 * @route GET |
 */
export async function getTweet(req, res, next) {
  try {
    const {
      params: { tweetId },
    } = req;

    const tweet = await queries.getTweetById(tweetId);

    res.status(200).send({ tweet });
  } catch (e) {
    console.log(e);
    next(e);
  }
}
