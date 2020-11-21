import * as queries from "./store";

/**
 * @description Registers new user
 * @route POST | /
 */
export async function authenticateUser(req, res, next) {
  try {
    const {
      body: { email, password },
    } = req;

    const user = await queries.authenticateUser({
      email,
      password, // Encrypt password
    });

    if (!user.display_name) {
      return res.status(400).send({
        msg: "User not found!",
      });
    }

    // create JWT

    res.status(200).send({ user });
  } catch (e) {
    console.log(e);
    next(e);
  }
}
