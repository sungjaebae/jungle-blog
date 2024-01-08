// ? == Drizzle schemas ==
// ?  https://orm.drizzle.team/docs/schemas

import { mysqlTable, varchar, serial, text } from "drizzle-orm/mysql-core";

// 테스트 용도
export const users = mysqlTable("users", {
  id: serial("id").primaryKey(),
  fullName: text("full_name"),
  phone: varchar("phone", { length: 256 }),
});

export type User = typeof users.$inferSelect; // return type when queried
export type NewUser = typeof users.$inferInsert; // insert type
