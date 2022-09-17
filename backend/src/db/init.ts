import { Sequelize, Dialect } from 'sequelize'
import { config } from '.'

export const initializeDB = async () => {
  const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
      dialect: config.dialect as Dialect,
      host: config.host,
      ...config.options,
    }
  )

  try {
    sequelize.authenticate()
    console.log('connected to db 🗄')
  } catch (error) {
    console.error('Database connection failed: ', error)
  }

  return sequelize
}
