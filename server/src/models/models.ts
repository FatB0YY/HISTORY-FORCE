import * as dotenv from 'dotenv'
dotenv.config({ path: `.${process.env.NODE_ENV}.env` })

import { QuestionsAnswers, initQuestionsAnswersModel } from './dbModels/QuestionsAnswers.model.js'
import { Test, initTestModel } from './dbModels/Test.model.js'
import { TestQuestionsAnswers, initTestQuestionsAnswersModel } from './dbModels/TestQuestionsAnswers.model.js'
import { Category, initCategoryModel } from './dbModels/Category.mode.js'
import { Sequelize } from 'sequelize'

export const sequelize: Sequelize = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASSWORD!,
  {
    dialect: 'postgres',
    host: process.env.DB_HOST!,
    port: +process.env.DB_PORT!,
  }
)

// Инициализация моделей
initQuestionsAnswersModel(sequelize)
initTestModel(sequelize)
initTestQuestionsAnswersModel(sequelize)
initCategoryModel(sequelize)

export { QuestionsAnswers, Test, TestQuestionsAnswers, Category }
