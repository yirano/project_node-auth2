const router = require('express').Router()
const Users = require('../models/users-model.js')

router.get('/', async (req, res, next) => {
  try {
    res.json(await Users.find())
  } catch (error) {
    next(error)
  }
})


module.exports = router