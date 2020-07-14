import { Router } from 'express'
import controllers from './loanRouter.controller'

const router = Router()

// /api/loan
router
  .route('/')
  .get(controllers.getMany)
  .post(controllers.createOne)

// /api/loan/:page
router.route('/:page').get(controllers.getManyPagination)

// /api/loan/states
router
  .route('/states/all')
  .get(controllers.getAllStates)
  .post(controllers.createOne)

// /api/loan/:state
router.route('/state/:state').get(controllers.getSomeStates)

// /api/loan/info/:state
router.route('/info/:state').get(controllers.getAllStateInfo)

// /api/loan/:id
router
  .route('/:id')
  .get(controllers.getOne)
  .put(controllers.updateOne)
  .delete(controllers.removeOne)

export default router
