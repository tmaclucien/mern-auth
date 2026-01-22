// protect routes: check  the cookie if the user is authenticated, if not, redirect to login page
import asyncHandler from 'express-async-handler'
import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'

const protect = asyncHandler(async (req, res, next) => {
  const token = req.cookies?.['Access-Token'] // without cookie-parser, the req.cookies will be undefined
  if(token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRECT) // get the payload from the token
      // the ultimate goal is to be able to access the user data in the request object
      // so we need to attach the user data to the request object
      req.user = await User.findById(decoded?.userId).select('-password') // 从查询结果中排除password字段，不返回用户的密码数据，保障安全。
      next()
    } catch (error) {
        res.status(401)
        throw new Error('Not authorized, invalid  token')
    }
  }else {
    res.status(401)
    throw new Error('Not authorized, no  token')
  }
})

export {
  protect
}