import { Router } from 'express'
import controllers from './loanInfo.controller'

const router = Router()

// /api/info
router
  .route('/')
  .get(controllers.getMany)

// /api/loan/:state
router
  .route('/:state')
  .get(controllers.getOne)

export default router
