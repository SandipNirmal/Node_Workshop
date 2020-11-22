import { getUserById } from "../modules/users/store";

/**
 * Middleware to attach current requesting user.
 *
 * To be followed by auth middleware
 */
export async function attachCurrentUser(req, res, next) {
  try {
    let user = false;

    if (req.payload && req.payload.id) {
      user = await getUserById(req.payload.id);
    }
    req.user = user;
    next();
  } catch (e) {
    next(e);
  }
}
