import { bigint, bigserial, boolean, pgTable, text, timestamp, varchar } from 'drizzle-orm/pg-core'

/** 사용자 */
export const users = pgTable('users', {
  id: bigserial('id', { mode: 'bigint' }).primaryKey(),
  username: varchar('username', { length: 20 }).notNull().unique('user_accounts__uk--username'),
  admin: boolean('admin').notNull().default(false),
})

/** 사용자 비밀번호 */
export const userPassword = pgTable('user_password', {
  id: bigint('user_id', { mode: 'bigint' }).notNull().references(() => users.id).primaryKey(),
  encryptedPassword: text('encrypted_password').notNull(),
  lastChangedAt: timestamp('last_changed_at', { mode: 'date', withTimezone: true }).notNull().defaultNow(),
})
