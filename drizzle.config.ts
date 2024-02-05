import { defineConfig } from 'drizzle-kit'
import process from 'node:process'
import dotenv from 'dotenv'

dotenv.config({
  path: process.env.NODE_ENV === 'production' ? '.env' : '.env.dev',
})

export default defineConfig({
  driver: 'pg',
  dbCredentials: {
    connectionString: `postgresql://${process.env.NUXT_DB_USERNAME}:${process.env.NUXT_DB_PASSWORD}@${process.env.NUXT_DB_HOST}:${process.env.NUXT_DB_PORT}/${process.env.NUXT_DB_NAME}`,
  },

  schema: './src/server/database/schemas/',
  out: './src/server/database/migrations/',
})
