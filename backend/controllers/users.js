import asyncHandler from 'express-async-handler' //express-async-handler的主要作用是自动捕获异步函数中的错误，并将它们传递给Express的错误处理中间件
import User from '../models/userModel.js'

// @desc Auth user / set token
// route POST /api/users/auth
// @access Public
const authUser = asyncHandler(async (req, res) => {
  res.status(401)
  throw new Error('Not authorized, please login') // asyncHandler + throw error === try catch next(error)
  // res.status(200).json({
  //   message: 'user auth...'
  // })
})
// @desc Register user
// route POST /api/users/register
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const {name, email, password} = req.body
  const userExist = await User.findOne({email})
  if (userExist) {
    res.status(400)
    throw new Error('User already exists')
  }
  const user = await User.create({
    name, email, password
  })
  if(user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})
// @desc Logout user
// route POST /api/users/logout
// @access Private
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: 'user logout...'
  })
})
// @desc Get user profile
// route GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: 'user profile...'
  })
})

// @desc Update user profile
// route PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: 'user profile updated...'
  })
})
export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile
}