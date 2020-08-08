const jwt = require('jsonwebtoken')

const roles = ['users', 'admin']

function restrict(role) {
  return async (req, res, next) => {
    const authError = { message: 'Invalid Credentials' }
    try {
      const token = req.cookies.token

      if (!token) {
        return res.status(401).json(authError)
      }

      jwt.verify(token, 'keep it safe', (err, decoded) => {

      })
    } catch (error) {
      next(error)
    }
  }
}