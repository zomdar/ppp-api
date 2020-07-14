import { crudControllers } from '../utils/crud'
import { StateInfo } from './loanInfo.model'

export default {
  ...crudControllers(StateInfo),
  async getOne(req, res) {
    try {
      const doc = await StateInfo.findOne({ _id: req.params.id })
        .select()
        .lean()
        .exec()

      if (!doc) {
        return res.status(400).end()
      }

      res.status(200).json({ data: doc })
    } catch (e) {
      console.error(e)
      res.status(400).end()
    }
  }
}
