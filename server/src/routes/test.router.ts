import { Router } from 'express'
import testController from '../controllers/testController.js'

const router = Router()

router.get('/', testController.getAllTest)
router.get('/:testId', testController.getOneTest)

export default router
