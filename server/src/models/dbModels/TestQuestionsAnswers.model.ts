import { DataTypes, Model, Sequelize } from 'sequelize'
import { ITQA } from '../interfaces/ITQA.js'
import { Test } from './Test.model.js'
import { QuestionsAnswers } from './QuestionsAnswers.model.js'

class TestQuestionsAnswers extends Model<ITQA> {
  public id!: number
  public idTest!: number
  public idQuestionsAnswers!: number

  public readonly test?: Test
  public readonly questionsAnswers?: QuestionsAnswers
}

export function initTestQuestionsAnswersModel(sequelize: Sequelize): void {
  TestQuestionsAnswers.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      idTest: { type: DataTypes.INTEGER, allowNull: false },
      idQuestionsAnswers: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      tableName: 'TestQuestionsAnswers',
    }
  )

  Test.belongsToMany(QuestionsAnswers, {
    through: TestQuestionsAnswers,
    foreignKey: 'idTest',
    otherKey: 'idQuestionsAnswers',
  })
  QuestionsAnswers.belongsToMany(Test, {
    through: TestQuestionsAnswers,
    foreignKey: 'idQuestionsAnswers', // Имя столбца, связывающего с таблицей QuestionsAnswers
    otherKey: 'idTest', // Имя столбца, связывающего с таблицей Test
  })
}

export { TestQuestionsAnswers }
