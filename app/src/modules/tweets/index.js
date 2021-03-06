import express from "express";

import { createTweet, listTweets, getTweet } from "./controller";
import { createTweet as createTweetValidator } from "./schemaValidator";
import { auth, attachCurrentUser } from "../../middlewares";

const router = express.Router();

router.post(
  "/",
  createTweetValidator,
  auth.required,
  attachCurrentUser,
  createTweet
);
router.get("/", listTweets);

router.get("/:tweetId", getTweet); // /api/users/${userid} -> /api/users/u-1234

// TODO - Add Edit, Delete and Pagination

export default router;
