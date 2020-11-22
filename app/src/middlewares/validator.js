/**
 * Validates request schema
 * @param {*} req
 * @param {*} next
 * @param {*} schema
 */
export function validateRequest(req, next, schema) {
  const options = {
    abortEarly: false, // include all errors
    allowUnknown: true, // ignore unknown props
    stripUnknown: true, // remove unknown props
  };
  const { error, value } = schema.validate(req.body, options);

  if (error) {
    next({
      status: 400,
      message: `Validation error: ${error.details
        .map((x) => x.message)
        .join(', ')}`,
    });
  } else {
    req.body = value;
    next();
  }
}
