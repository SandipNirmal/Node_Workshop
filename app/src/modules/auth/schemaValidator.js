import Joi from "joi";

import { validateRequest } from "../../middlewares";

export function loginSchema(req, res, next) {
  const schema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  });
  validateRequest(req, next, schema);
}
