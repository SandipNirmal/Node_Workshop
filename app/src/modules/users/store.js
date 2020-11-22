import { query, query_one } from "../../db";
import { generate_uuid } from "../../utils";

const USER_PROJETION = "id, email, firstname, lastname";

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
    const { id } = await query_one(registerQuery, values);

    return id;
  } catch (e) {
    throw new Error(e);
  }
}

export async function findUserByEmail(email) {
  const FIND_BY_EMAIL = `SELECT ${USER_PROJETION} from user_accounts WHERE email=$1`;

  try {
    const user = await query_one(FIND_BY_EMAIL, [email]);

    if (user.email) {
      return user;
    }

    return { email: "" };
  } catch (e) {
    throw new Error(e);
  }
}

export async function getUserById(id) {
  const FIND_BY_ID = `SELECT ${USER_PROJETION} from user_accounts WHERE id=$1`;

  try {
    const user = await query_one(FIND_BY_ID, [id]);

    if (user.id) {
      return user;
    }

    return { id: "" };
  } catch (e) {
    throw new Error(e);
  }
}
