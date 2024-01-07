import { env } from "@/env.config";
import type { Config } from "drizzle-kit";
// ? == NOTE ==
// ? For local development, use dotenv to load environment variables from a .env file or pull from vercel
// ? (see ...)

export default {
  schema: "./database/db_tables.ts", // Path to your schema
  out: "./database/drizzle", // Path to the output directory
  driver: "mysql2",
  dbCredentials: {
    user: env.db.user,
    password: env.db.password,
    host: env.db.host,
    port: env.db.port,
    database: env.db.database,
  },
} satisfies Config;
