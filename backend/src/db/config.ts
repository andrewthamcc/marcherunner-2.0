import {
  ConnectionError,
  ConnectionTimedOutError,
  TimeoutError,
} from 'sequelize'
require('dotenv').config()

export const config = {
  username: process.env.DB_USER || '',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || '',
  dialect: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  options: {
    retry: {
      match: [
        ConnectionError,
        ConnectionTimedOutError,
        TimeoutError,
        /Deadlock/i,
      ],
      max: 3,
    },
  },
}
