import { query } from "../../db";
import { generate_uuid } from "../../utils";

export async function registerUser({ firstname, lastname, email, password }) {
  const registerQuery = `INSERT INTO
  user_accounts (id, display_name, firstname, lastname, email, password)
  values($1, $2, $3, $4, $5, $6) returning id`;

  const values = [
    generate_uuid(),
    `${firstname} ${lastname}`,
    firstname,
    lastname,
    email,
    password,
  ];

  try {
    const userRegistration = await query(registerQuery, values);
    return userRegistration;
  } catch (e) {
    throw new Error(e);
  }
}
