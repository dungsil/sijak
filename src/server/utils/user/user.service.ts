import { users } from '~/server/database/schemas/users'
import { eq } from 'drizzle-orm'

type User = typeof users.$inferSelect

export const findUserByUsername = async (username: string) => {
  const found: User[] = await db
    .select()
    .from(users)
    .where(eq(users.username, username.toLowerCase()))
    .limit(1)
    .execute()

  return found[0]
}
