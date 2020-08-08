const express = require('express')
const usersRouter = require('./routers/users-router')
const server = express()
const PORT = process.env.PORT || 4000
server.use(express.json())

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