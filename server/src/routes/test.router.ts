import { Router } from 'express'
import testController from '../controllers/testController.js'

const router = Router()

router.get('/', testController.getAll)
router.get('/:testId', testController.getOne)

export default router
