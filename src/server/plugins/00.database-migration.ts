import log from 'consola'
import { drizzle } from 'drizzle-orm/postgres-js'
import { migrate } from 'drizzle-orm/postgres-js/migrator'
import postgres from 'postgres'

const config = useRuntimeConfig()

export default defineNitroPlugin(async () => {
  if (process.dev) {
    log.debug('Skipping database migration in development mode')

    return
  }

  log.info('Running database migration')
  const dbClient = postgres(
    `postgresql://${config.db.username}:${config.db.password}@${config.db.host}:${config.db.port}/${config.db.name}`,
    { max: 1 },
  )

  const ormClient = drizzle(dbClient)
  await migrate(ormClient, { migrationsFolder: 'server/database/migrations' })
  log.success('Database migration completed!')

  await dbClient.end()
})
