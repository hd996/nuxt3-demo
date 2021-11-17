import pkg from 'sequelize'
import { DB } from '../db'

const { DataTypes } = pkg

const schema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  age: {
    type: DataTypes.NUMBER,
  },
}

export const User = DB.define('user', schema, {
  tableName: 'user',
  timestamps: false,
})
