import { DataTypes, Model, Sequelize } from 'sequelize'
import { IQA } from '../interfaces/IQA.js'
import { TestQuestionsAnswers } from './TestQuestionsAnswers.model.js'

class QuestionsAnswers extends Model<IQA> {
  public id!: number
  public questionText!: string
  public answerOptions!: string
  public correctAnswer!: string

  public readonly testQuestionsAnswers?: TestQuestionsAnswers[]
}

export function initQuestionsAnswersModel(sequelize: Sequelize): void {
  QuestionsAnswers.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      questionText: { type: DataTypes.TEXT },
      answerOptions: { type: DataTypes.TEXT },
      correctAnswer: { type: DataTypes.TEXT },
    },
    {
      sequelize,
      tableName: 'QuestionsAnswers',
    }
  )
}

export { QuestionsAnswers }
