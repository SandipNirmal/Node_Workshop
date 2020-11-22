import bcrypt from "bcrypt";

import * as queries from "./store";
import { ERROR_MESSAGES, generateJWT } from "../../utils";

/**
 * @description Registers new user
 * @route POST | /
 */
export async function authenticateUser(req, res, next) {
  try {
    const {
      body: { email, password },
    } = req;

    const {
      password: hashedPassword,
      ...user
    } = await queries.authenticateUser({
      email, // Encrypt password
    });

    if (!user.email || !bcrypt.compareSync(password, hashedPassword)) {
      return res.status(400).send({
        msg: ERROR_MESSAGES.INVALID_AUTH,
      });
    }

    // create JWT
    const token = generateJWT(user.id, email);

    res.status(200).send({ ...user, token });
  } catch (e) {
    console.log(e);
    next(e);
  }
}
