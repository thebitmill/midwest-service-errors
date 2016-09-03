'use strict'

const router = new (require('express')).Router()
const { isAdmin } = require('express-module-membership/passport/authorization-middleware')

const mw = require('./middleware')

router.route('/')
  .get(isAdmin, mw.formatQuery, mw.paginate, mw.find)
  .delete(isAdmin, mw.formatQuery, mw.removeQuery)

router.route('/:id')
  .get(isAdmin, mw.findById)
  .delete(isAdmin, mw.remove)

module.exports = router
