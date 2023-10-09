import { Router } from 'express'
import testRouter from './test.router.js'
const router = Router()

router.use('/tests', testRouter)

export default router
