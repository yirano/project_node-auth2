const router = require('express').Router()
const Users = require('../models/users-model.js')
const restrict = require('../middlewares/restrict')
const bcrypt = require('bcryptjs')

router.get('/', restrict("admin"), async (req, res, next) => {
  try {
    res.json(await Users.find())
  } catch (error) {
    next(error)
  }
})

router.post('/register', async (req, res, next) => {
  try {
    const { username, password, department } = req.body
    const user = await Users.findBy({ username }).first()

    if (user) {
      return res.status(409).json({ message: "Username is already taken" })
    }

    const newUser = await Users.add({
      username,
      password: await bcrypt.hash(password, 14),
      department,
      role
    })

    res.status(201).json(newUser)
  } catch (error) {
    next(error)
  }
})


module.exports = router