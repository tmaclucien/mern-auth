import asyncHandler from 'express-async-handler' //express-async-handler的主要作用是自动捕获异步函数中的错误，并将它们传递给Express的错误处理中间件
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'

/**
 * @desc Auth user / set token
 * @route POST /api/users/auth
 * @access Public
 */
const authUser = asyncHandler(async (req, res) => {
  const {email, password} = req?.body || {}
  const user = await User.findOne({email})
  // check if user and password match
  if(!user) {
    res.status(401)
    throw new Error('Invalid email or password')
  }else {
   const isMatch = await user.matchPassword(password) // compare the password with the hashed password in the database
    if(!isMatch) {
      res.status(401)
      throw new Error('Incorrect password')
    }
    generateToken(res, user._id)
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email
    })
  }
})

/**
 * @desc Register user
 * @route POST /api/users/register
 * @access Public
 */
const registerUser = asyncHandler(async (req, res) => {
  const {name, email, password} = req.body
  const userExist = await User.findOne({email})
  if (userExist) {
    res.status(400)
    throw new Error('User already exists')
  }
  const user = await User.create({
    name, 
    email, 
    password // we can crypt password here, but in order to keep the controller light, we will do it in the userModel
  })
  if(user) {
    generateToken(res, user._id) // set jwt token in the response cookie
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

/**
 * @desc Logout user
 * @route POST /api/users/logout
 * @access Private
 */

const logoutUser = asyncHandler(async (req, res) => {
  res.cookie('Access-Token', '', {
    httpOnly: true,
    expires: new Date(0)
  })
  res.status(200).json({
    message: 'user logout...'
  })
})


/**
 * @desc Get user profile
 * @route GET /api/users/profile
 * @access Private
 */
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json(req.user)
})

/**
 * @desc Update user profile
 * @route PUT /api/users/profile
 * @access Private
 */
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)  
  if(user) {
    try {
      user.name = req.body.name || user.name
      user.email = req.body.email || user.email
      if(req.body.password) {
        user.password = req.body.password
      }
      const updatedUser = await user.save()
      res.status(200).json(updatedUser) 
    } catch (error) {
      res.status(400)
      throw new Error('Invalid user data')
    }

  }else {
    res.status(404)
    throw new Error('User not found')
  }
 
})



export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile
}