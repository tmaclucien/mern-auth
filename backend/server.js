import express from 'express'
import dotenv from 'dotenv'
import userRoute from './routes/users.js'

const app = express()
dotenv.config()
const port = process.env.PORT


app.use('/api/users', userRoute)


app.listen(port, () => {
  console.log(`server is running on port:${port}`)
})