import { DrizzlePostgreSQLAdapter } from '@lucia-auth/adapter-drizzle'
import { db } from '~/server/utils/db'
import { users, userSession } from '~/server/database/schemas/users'
import { Lucia } from 'lucia'

declare module 'lucia' {
  interface Register {
    Lucia: typeof lucia
    UserId: number;
  }
}

const adapter = new DrizzlePostgreSQLAdapter(
  db,
  userSession,
  users
)

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    expires: false,
    attributes: {
      secure: process.env.NODE_ENV === 'production'
    }
  },
})
