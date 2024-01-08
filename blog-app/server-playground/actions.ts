"use server";

import { NewUser, User, users } from "@/database/db_tables";
import { db } from "@/database/lib/dbConnection";
import { MySqlRawQueryResult } from "drizzle-orm/mysql2";

// export async function getProducts() {
//   try {
//     if (!db) throw new Error("Database connection failed");
//     const data = await db.select().products.findMany({
//       with: {
//         productImages: true,
//         productVariants: true,
//       },
//       orderBy: (products, { desc }) => [desc(products.id)],
//     });

//     return { data };
//   } catch (error) {
//     return { error };
//   }
// }

export async function getUsers() {
  const result: User[] = await db.select().from(users);
  return result;
}

export async function insertUser(user: NewUser): Promise<MySqlRawQueryResult> {
  return db.insert(users).values(user);
}
