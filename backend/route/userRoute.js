import express from 'express'
import { getCurrentUser } from '../controller/userController.js'
import { isAuth } from '../middleware/authMiddleware.js'

const userRouter = express.Router()
userRouter.get("/getCurrentuser",isAuth, getCurrentUser)

export default userRouter