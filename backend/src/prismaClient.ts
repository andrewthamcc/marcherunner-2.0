import path from 'path'
import dotenv from 'dotenv'
import { PrismaClient } from '@prisma/client'
dotenv.config({ path: path.resolve('./.env') })

const env = process.env.NODE_ENV || 'development'
const url =
  env === 'development'
    ? process.env.DATABASE_DEV_URL
    : process.env.DATABASE_URL

const prisma = new PrismaClient({
  datasources: {
    db: {
      url,
    },
  },
})

export const prismaClient: { prisma: PrismaClient } = {
  prisma,
}
