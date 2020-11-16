// Pool should not be used directly to query db use dbquery
import { Pool } from "pg";
import "dotenv/config";

var DB_URL = process.env.DATABASE_URL;

if (process.env.NODE_ENV === "production") {
  DB_URL += process.env.TEST_DB;
} else if (process.env.NODE_ENV === "test") {
  DB_URL += process.env.TEST_DB;
} else {
  DB_URL += process.env.LOCAL_DB;
}

const databaseConfig = { connectionString: DB_URL };
export const pool = new Pool(databaseConfig);
