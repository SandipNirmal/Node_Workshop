import * as queries from "./store";

/**
 * @description Registers new user
 * @route POST | /
 */
export async function registerNewUser(req, res, next) {
  try {
    const {
      body: { email, password, firstname, lastname },
    } = req;

    const userId = await queries.registerUser({
      email,
      password, // Encrypt password
      firstname,
      lastname,
    });

    res.status(200).send({ userId });
  } catch (e) {
    console.log(e);
    next(e);
  }
}
