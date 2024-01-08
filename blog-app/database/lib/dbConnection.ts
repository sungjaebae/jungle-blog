import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { env } from "@/env.config";

//! RUNNED AT BUILD TIME
const poolConnection = await mysql.createPool({
  user: env.db.user,
  password: env.db.password,
  host: env.db.host,
  port: env.db.port,
  database: env.db.database,
});

export const db = drizzle(poolConnection);
