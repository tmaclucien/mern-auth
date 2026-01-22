import express from 'express'
import {authUser, registerUser, logoutUser, getUserProfile, updateUserProfile} from '../controllers/userController.js'
import {protect} from '../middlewares/authMiddleware.js'

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
router.post('/logout', protect,  logoutUser)

/**
 * @desc get user profile & update user profile
 */
router.route('/profile')
      .get(protect, getUserProfile)
      .put(protect, updateUserProfile)


export default router