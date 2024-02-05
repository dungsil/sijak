import { bigserial, pgTable, varchar } from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
  id: bigserial('id', { mode: 'bigint' }).primaryKey(),
  username: varchar('username', { length: 20 }).notNull().unique('users__uk--username'),
})

export type Users = typeof users.$inferSelect
