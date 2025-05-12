import express from 'express'
import {authUser} from '../controllers/users.js'

const router = express.Router()

router.post('/auth', authUser)

export default router