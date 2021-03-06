const jwt = require('jsonwebtoken')
const { json } = require('express')

const roles = [ 'student', 'teacher', 'dean' ]

function restrict(role) {
	return async (req, res, next) => {
		const authError = { message: 'Invalid Credentials' }
		try {
			const token = req.headers.authorization || req.cookies.token
			console.log(req.cookies.token)
			jwt.verify(token, process.env.SECRET, (err, decoded) => {
				if (err) {
					console.dir(err)
					return res.status(401).json({ message: 'STAY OUT YOU CANT COME IN' })
				}

				if (role && roles.indexOf(decoded.role) < roles.indexOf(role)) {
					return res.status(401).json({ message: "You don't have access to this feature." })
				}
				next()
			})
		} catch (error) {
			console.log('Hello')
			next(error)
		}
	}
}

module.exports = restrict
