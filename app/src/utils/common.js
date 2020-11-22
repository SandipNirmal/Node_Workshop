import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import { secret, expiry } from "../config";

const saltRounds = 5;

/**
 * Retutns UUID
 */
export const generate_uuid = () => {
  return uuidv4();
};

/**
 * Generated JWT using and userId and returns it
 * @param {*} id
 * @param {*} email
 */
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

/**
 * Returns encrypted password
 * @param {string} password
 * @returns {string}
 */
export function encryptPassword(password) {
  const hash = bcrypt.hashSync(password, saltRounds);
  return hash;
}
