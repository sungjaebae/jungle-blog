import {
  mysqlTable,
  mysqlSchema,
  AnyMySqlColumn,
  primaryKey,
  varchar,
  int,
  index,
  foreignKey,
  tinytext,
  unique,
  serial,
  text,
} from "drizzle-orm/mysql-core";
import { sql } from "drizzle-orm";

export const exampleLang = mysqlTable(
  "example_lang",
  {
    kLang: varchar("k_lang", { length: 5 }).notNull(),
  },
  (table) => {
    return {
      exampleLangKLang: primaryKey({
        columns: [table.kLang],
        name: "example_lang_k_lang",
      }),
    };
  },
);

export const examplePost = mysqlTable(
  "example_post",
  {
    kExample: int("k_example").notNull(),
  },
  (table) => {
    return {
      examplePostKExample: primaryKey({
        columns: [table.kExample],
        name: "example_post_k_example",
      }),
    };
  },
);

export const exampleText = mysqlTable(
  "example_text",
  {
    kText: int("k_text").notNull(),
    fkPost: int("fk_post")
      .notNull()
      .references(() => examplePost.kExample),
    exampleTextcol: tinytext("example_textcol"),
    fkLang: varchar("fk_lang", { length: 5 }).references(
      () => exampleLang.kLang,
      { onDelete: "cascade", onUpdate: "cascade" },
    ),
  },
  (table) => {
    return {
      exampleIdIdx: index("example_id_idx").on(table.fkPost),
      langIdIdx: index("lang_id_idx").on(table.fkLang),
      exampleTextKText: primaryKey({
        columns: [table.kText],
        name: "example_text_k_text",
      }),
    };
  },
);

export const users = mysqlTable(
  "users",
  {
    id: serial("id").notNull(),
    fullName: text("full_name"),
    phone: varchar("phone", { length: 256 }),
  },
  (table) => {
    return {
      usersId: primaryKey({ columns: [table.id], name: "users_id" }),
      id: unique("id").on(table.id),
    };
  },
);
