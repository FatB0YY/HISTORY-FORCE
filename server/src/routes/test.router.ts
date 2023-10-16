import { Router } from 'express'
import testController from '../controllers/testController.js'
import { testValidation } from '../validation/testValidation.js'

const router = Router()

router.get('/', testController.getAllTest)
router.get('/:testId', testValidation, testController.getOneTest)

export default router
