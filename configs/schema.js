import { boolean, integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const USER_TABLE = pgTable("users", {
  id: integer().primaryKey(),
  name: varchar().notNull(),
  isMember: boolean().default(false),
  email: varchar(),
});
