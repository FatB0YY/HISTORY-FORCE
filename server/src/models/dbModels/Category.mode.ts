import { DataTypes, Model, Sequelize } from 'sequelize'
import { IC } from '../interfaces/IC.js'
import { Test } from './Test.model.js'

class Category extends Model<IC> {
  public id!: number
  public name!: string

  public readonly tests?: Test[]
}

export function initCategoryModel(sequelize: Sequelize): void {
  Category.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      name: { type: DataTypes.TEXT },
    },
    {
      sequelize,
      tableName: 'Category',
    }
  )

  Category.hasMany(Test)
  Test.belongsTo(Category)
}

export { Category }
