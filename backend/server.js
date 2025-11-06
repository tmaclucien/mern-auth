import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
// @desc routes
import userRoutes from './routes/userRoutes.js'
// @desc middlewares
import {notFound, errorHandler} from './middlewares/errorMiddleware.js'

dotenv.config()

connectDB()
const app = express()
const port = process.env.PORT || 5001

/**
 * 以下app.use的顺序很重要，必须按照：解析请求体->匹配路由->捕获错误，这是一次 HTTP 请求的自然生命周期
 * Request → Body Parser → Route Handlers → 404 Handler → Error Handler → Response
 * Express是一个严格的“中间件链”框架。你写在上面的先执行，写在下面的后执行。，app.use() 的 调用顺序就是中间件的执行顺序
 */
app.use(express.json()) // parse the json body, or the req.body will be undefined
app.use(express.urlencoded({extended: true})) // it will allow us to parse the form data, or the req.body will be undefined
// 1. setup routes
app.use('/api/users', userRoutes)
// 2. setup middlewares first
app.use(notFound)
//  express's default error middleware is only called if we call next(error) in the middleware
app.use(errorHandler)

app.listen(port, (e) => {
  console.log(`server is running on port:${port}`)
})