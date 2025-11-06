import express from 'express'
import {authUser, registerUser, logoutUser, getUserProfile, updateUserProfile} from '../controllers/userController.js'

const router = express.Router()

/**
 * @desc auth user
 */
router.post('/auth', authUser)

/**
 * @desc register user
 */
router.post('/register', registerUser)

/**
 * @desc logout user
 */
router.post('/logout', logoutUser)

/**
 * @desc get user profile & update user profile
 */
router.route('/profile')
      .get(getUserProfile)
      .put(updateUserProfile)


export default router