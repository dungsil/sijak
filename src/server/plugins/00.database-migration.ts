import log from 'consola'
import { migrate } from 'drizzle-orm/postgres-js/migrator'
import { db } from '~/server/utils/db'

export default defineNitroPlugin(async () => {
  if (process.dev) {
    log.debug('Skipping database migration in development mode')

    return
  }

  log.info('Running database migration')
  await migrate(db, { migrationsFolder: 'server/database/migrations' })
  log.success('Database migration completed!')
})
