import { Request, Response, NextFunction } from 'express'
import { QuestionsAnswers, Test } from '../models/models.js'

class TestController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const tests = await Test.findAll({
        include: QuestionsAnswers,
      })
      res.json(tests)
    } catch (error) {
      next(error)
    }
  }

  async getOne(req: Request, res: Response, next: NextFunction) {
    try {
      const testId = parseInt(req.params.testId)

      const test = await Test.findOne({
        where: { id: testId },
        include: QuestionsAnswers,
      })
      res.json(test)
    } catch (error) {
      next(error)
    }
  }
}

export default new TestController()
