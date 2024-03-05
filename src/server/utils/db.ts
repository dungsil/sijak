import postgres from 'postgres'
import { drizzle } from 'drizzle-orm/postgres-js'

const config = useRuntimeConfig()

const raw = postgres(
  `postgresql://${config.db.username}:${config.db.password}@${config.db.host}:${config.db.port}/${config.db.name}`,
  { max: 1 },
)

export const db = drizzle(raw)
