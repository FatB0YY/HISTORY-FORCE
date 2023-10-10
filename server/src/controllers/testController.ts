import { Request, Response, NextFunction } from 'express'
import { Category, QuestionsAnswers, Test } from '../models/models.js'

class TestController {
  async getAllTest(req: Request, res: Response, next: NextFunction) {
    try {
      const tests = await Test.findAll({
        include: [
          { model: Category }, // Включаем связанную модель Category
          { model: QuestionsAnswers }, // Включаем связанную модель QuestionsAnswers
        ],
      })
      res.json(tests)
    } catch (error) {
      next(error)
    }
  }

  async getOneTest(req: Request, res: Response, next: NextFunction) {
    try {
      const testId = parseInt(req.params.testId)

      const test = await Test.findOne({
        where: { id: testId },
        include: [{ model: Category }, { model: QuestionsAnswers }],
      })
      res.json(test)
    } catch (error) {
      next(error)
    }
  }

  // async getAllCategories(req: Request, res: Response, next: NextFunction) {
  //   try {
  //     const categories = await Category.findAll()
  //     res.json(categories)
  //   } catch (error) {
  //     next(error)
  //   }
  // }
}

export default new TestController()
