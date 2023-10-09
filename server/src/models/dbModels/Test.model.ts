import { DataTypes, Model, Sequelize } from 'sequelize'
import { IT } from '../interfaces/IT.js'
import { TestQuestionsAnswers } from './TestQuestionsAnswers.model.js'

class Test extends Model<IT> {
  public id!: number
  public name!: string
  public description!: string
  public t!: number

  public readonly testQuestionsAnswers?: TestQuestionsAnswers[]
}

export function initTestModel(sequelize: Sequelize): void {
  Test.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      name: { type: DataTypes.TEXT },
      description: { type: DataTypes.TEXT },
      t: { type: DataTypes.INTEGER },
    },
    {
      sequelize,
      tableName: 'Test',
    }
  )
}

export { Test }
