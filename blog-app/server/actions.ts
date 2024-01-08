"use server";

import { getCurrentLocale } from "@/app/locales/server";
import { eq } from "drizzle-orm";
import { MySql2Database } from "drizzle-orm/mysql2";
import { getDb } from "@/database/lib/dbConnection";
import { exampleText } from "@/database/db_tables";

const getExampleStatement = (
  db: MySql2Database<Record<string, never>>,
  lang: "en" | "fr" | "kr",
) => db.select().from(exampleText).where(eq(exampleText.fkLang, lang));

export async function getExemple() {
  const lang = getCurrentLocale();
  const db: MySql2Database<Record<string, never>> | null = await getDb();

  if (!db) return null; // Connection Failed

  try {
    return await getExampleStatement(db, lang);
  } catch (error) {
    return error as { message: string };
  }
}

export type ExempleDataType = Awaited<ReturnType<typeof getExemple>> | null;
