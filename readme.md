1. backend

package.json

- dotenv: load environment variables from .env file
- mongoose: interact with mongodb database
- bcryptjs: for hashing the password
- jsonwebtoken: for authentication
- express-async-handler: mongoose method which will be used within custom controller function return a promise, we can use try...catch in every controller. But when async-handler wrap the controller function, it will allow us to use custom error handler
-concurrently: can run client and server with one command at the same time

env

- MONGO_URL: mongodb 的地址需要添加指定的 database name， 否则会自动创建新的数据库。即 MONGO_URL=mongodb+srv://tmaclucien:LiHui546686!@mern-auth.ec3xykq.mongodb.net/<database_name>
- JWT_SECRECT: 使用 jsonwebtoken 创建 jwt token 的密钥，随机的字符串即可

Middlewares

- app.use 的顺序很重要，必须按照：解析请求体->匹配路由->捕获错误，这是一次 HTTP 请求的自然生命周期
- Request → Body Parser → Route Handlers → 404 Handler → Error Handler → Response
- Express 是一个严格的“中间件链”框架。你写在上面的先执行，写在下面的后执行。，app.use() 的 调用顺序就是中间件的执行顺序

JWT

- jwt 有三部分组成，header + payload（存储的用户信息） + signature（本地签名，即 JWT_SECRECT）

2. front end
```
npm create vite@latest frontend
```

3. links
https://www.traversymedia.com/blog/mern-crash-course-part-1
https://www.traversymedia.com/blog/mern-crash-course-part-2
