import pkg from 'sequelize'
import config from 'config'

const { Sequelize } = pkg

export const DB = new Sequelize(config.get('mysql'))
