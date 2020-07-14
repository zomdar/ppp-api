import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import config from './config'
import cors from 'cors'

//routers
import loanRouter from './loanRouter/loanRouter.router'
import { connect } from './utils/db'
import { signup, signin, protect } from './utils/auth'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

//routes
app.post('/signup', signup)
app.post('/signin', signin)
app.use('/api', protect)
app.use('/api/loan', loanRouter)

export const start = async () => {
  try {
    await connect()
    app.listen(config.port, () => {
      console.log(`REST API on http://localhost:${config.port}/api`)
    })
  } catch (e) {
    console.error(e)
  }
}
