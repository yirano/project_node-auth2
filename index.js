const express = require('express')
const usersRouter = require('./routers/users-router')
const cookieParser = require('cookie-parser')
const session = require("express-session")

const server = express()
const PORT = process.env.PORT || 4000

server.use(express.json())
server.use(cookieParser())

server.use(session({
  resave: false, // avoid recreating sessions that have not changed
  saveUninitialized: false, // comply with GDPR laws for setting cookies automatically
  secret: "keep it safe", // cryptographically sign the cookie
}))

server.use('/users', usersRouter)

server.use((err, req, res, next) => {
  console.dir(err)
  res.status(500).json({
    errorMessage: 'Something went wrong'
  })
})

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})