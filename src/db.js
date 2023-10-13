import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: process.ENV.DB_HOST,
  user: process.ENV.DB_USER,
  password: process.ENV.DB_PASS,
  port: 3306,
  database: process.ENV.DB_NAME,
});