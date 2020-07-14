import { crudControllers } from '../utils/crud'
import { LoanInfo } from './loanRouter.model'

export default {
  ...crudControllers(LoanInfo),
  async getOne(req, res) {
    try {
      const doc = await LoanInfo.findOne({ _id: req.params.id })
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
  },

  async getManyPagination(req, res, next) {
    try {
      const perPage = parseInt(req.query.perPage) || 10
      const page = req.params.page || 1

      const doc = await LoanInfo.find({})
        .skip(perPage * page - perPage)
        .limit(perPage)
        .exec()

      const count = await LoanInfo.count()

      if (!doc) {
        return res.status(400).end()
      }

      res.status(200).json({
        loans: doc,
        current: page,
        pages: Math.ceil(count / perPage)
      })
    } catch (e) {
      console.error(e)
      res.status(400).end()
    }
  },

  async getSomeStates(req, res) {
    try {
      const perPage = parseInt(req.query.perPage) || 10
      const page = req.query.page || 1
      const state = req.params.state.toUpperCase()

      const doc = await LoanInfo.find({ State: state })
        .skip(perPage * page - perPage)
        .limit(perPage)
        .exec()

      const count = await LoanInfo.count()

      if (!doc) {
        return res.status(400).end()
      }

      res.status(200).json({
        loans: doc,
        current: page,
        pages: Math.ceil(count / perPage)
      })
    } catch (e) {
      console.error(e)
      res.status(400).end()
    }
  },

  async getAllStateInfo(req, res) {
    try {
      const state = req.params.state.toUpperCase()
      const doc = await LoanInfo.find({ State: state }).count((err, res) => {
        if (err) throw err
      })

      if (!doc) {
        return res.status(400).end()
      }

      res.status(200).json({
        data: doc,
        state: state
      })
    } catch (e) {
      console.error(e)
      res.status(400).end()
    }
  },

  async getAllStates(req, res) {
    try {
      const doc = await LoanInfo.distinct('State', (err, res) => {
        if (err) throw err
      })

      if (!doc) {
        return res.status(400).end()
      }

      const formatStates = doc => {
        let emptyArr = []
        doc.forEach(s => {
          emptyArr.push({
            state: s,
            count: 0
          })
        })
        return emptyArr
      }

      res.status(200).json({
        data: formatStates(doc)
      })
    } catch (e) {
      console.error(e)
      res.status(400).end()
    }
  }
}
