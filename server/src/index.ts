import * as dotenv from 'dotenv'
dotenv.config({ path: `.${process.env.NODE_ENV}.env` })

import express, { Express, json } from 'express'
import * as model from './models/models.js'
import router from './routes/index.routes.js'
import { apiErrorHandler } from './error/apiErrorHandler.js'
import path from 'path'
import cors from 'cors'
import { fileDirName } from './utils/fileDirName.js'
import { sequelize } from './models/models.js'

const { __dirname, __filename } = fileDirName(import.meta)
const app: Express = express()

const allowedOrigins = [process.env.CLIENT_URL!]

app.use(
  cors({
    credentials: true,
    origin: allowedOrigins || '*',
  })
)
app.use(json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use('/api', router)
app.use(apiErrorHandler)

const PORT = process.env.PORT!

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()

    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`)
    })
  } catch (error: unknown) {
    console.error(error)
    process.exit(1)
  }
}

start()
