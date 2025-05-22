import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
// @desc routes
import usersRoutes from './routes/users.js'
// @desc middlewares
import {notFound, errorHandler} from './middlewares/error.js'

dotenv.config()

connectDB()
const app = express()
const port = process.env.PORT

// 2. setup routes
app.use(express.json())
app.use('/api/users', usersRoutes)
// 1. setuo middlewares first
app.use(notFound)
// express's default error middleware is only called if we call next(error) in the middleware
app.use(errorHandler)






app.listen(port, (e) => {
  console.log(`server is running on port:${port}`)
})