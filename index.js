const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const helmet = require('helmet')
const usersRouter = require('./routers/users-router')

const server = express()
const PORT = process.env.PORT || 4000

server.use(express.json())
server.use(helmet())
server.use(
	cors({
		origin: 'http://localhost:1234',
		credentials: true,
		cookie: {
			maxAge: 1000 * 60 * 60,
			secure: false, // true in production
			httpOnly: true
		}
	})
)

server.use(cookieParser())

server.use('/users', usersRouter)

server.use((err, req, res, next) => {
	console.dir(err)
	res.status(500).json({
		errorMessage: 'Something went wrong'
	})
})

if (!module.parent) {
	server.listen(PORT, () => {
		console.log(`Server is running at http://localhost:${PORT}`)
	})
}

module.exports = server
