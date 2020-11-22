import Joi from "joi";

import { validateRequest } from "../../middlewares";

export function createTweet(req, res, next) {
  const schema = Joi.object({
    content: Joi.string().required(),
  });
  validateRequest(req, next, schema);
}
