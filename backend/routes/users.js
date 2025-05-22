import express from 'express'
import {authUser, registerUser, logoutUser, getUserProfile, updateUserProfile} from '../controllers/users.js'

const router = express.Router()

router.post('/auth', authUser)

router.post('/register', registerUser)

router.post('/logout', logoutUser)

router.get('/profile', getUserProfile)
router.put('/profile', updateUserProfile)
// 另一种链式写法
// router.route('/profile').get(getUserProfile).put(updateUserProfile)

 
export default router