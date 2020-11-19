import { pool } from "./pool";

export const query = async (queryText, params = []) => {
  try {
    if (params.length > 0) {
      return await pool.query(queryText, params);
    } else {
      return await pool.query(queryText);
    }
  } catch (err) {
    console.log(err.stack);
    return err;
  }
};

export const query_one = async (queryText, params = []) => {
  const X = await query(queryText, params);
  const { rowCount, rows } = X;
  const result = {
    rowCount: rowCount,
    ...(rowCount > 0 ? rows[0] : {}),
  };

  return result;
};
