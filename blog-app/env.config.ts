import dotenv from "dotenv";

dotenv.config({
  path: ".env.local",
  debug: true,
});

function required(key: string, defaultValue?: string): string {
  const value = process.env[key] || defaultValue;
  if (value == null) {
    throw new Error(`Key ${key} is undefined`);
  }
  return value;
}

export const env = {
  host: {
    url: required("HOST_URL"),
  },
  db: {
    host: required("DB_HOST"),
    port: +required("DB_PORT"),
    user: required("DB_USER"),
    database: required("DB_DATABASE"),
    password: required("DB_PASSWORD"),
  },
};
