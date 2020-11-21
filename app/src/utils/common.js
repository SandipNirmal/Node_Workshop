import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";

import { secret, expiry } from "../config";

export const generate_uuid = () => {
  return uuidv4();
};

export const generateJWT = (id, email) => {
  return jwt.sign(
    {
      id,
      email,
    },
    secret,
    { expiresIn: `${expiry}d` }
  );
};
