import { defineConfig } from 'drizzle-kit'
import process from 'node:process'
import dotenv from 'dotenv'

dotenv.config({
  path: process.env.NODE_ENV === 'production' ? '.env' : '.env.dev',
})

export default defineConfig({
  driver: 'pg',
  dbCredentials: {
    connectionString: `postgresql://${process.env.SIJAK_DB_USERNAME}:${process.env.SIJAK_DB_PASSWORD}@${process.env.SIJAK_DB_HOST}:${process.env.SIJAK_DB_PORT}/${process.env.SIJAK_DB_NAME}`,
  },

  schema: './src/server/database/schemas/',
  out: './src/server/database/migrations/',
})
