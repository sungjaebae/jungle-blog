import { getCurrentLocale } from "@/app/locales/server";
import { eq } from "drizzle-orm";
import { MySql2Database } from "drizzle-orm/mysql2";
import { exampleText } from "@/database/db_tables";
import { getDb } from "@/database/lib/dbConnection";

const statement = (
  db: MySql2Database<Record<string, never>>,
  lang: "en" | "fr" | "kr",
) => db.select().from(exampleText).where(eq(exampleText.fkLang, lang));

export default async function getExemple() {
  const lang = getCurrentLocale();
  const db: MySql2Database<Record<string, never>> | null = await getDb();

  if (!db) return null; // Connection Failed

  try {
    return await statement(db, lang);
  } catch (error) {
    return error as { message: string };
  }
}

export type ExempleDataType = Awaited<ReturnType<typeof getExemple>> | null;
