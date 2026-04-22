import express from "express";

import { signUp, login, logOut, forgetPassword } from "../controller/authController.js";

const authRouter = express.Router()

authRouter.post("/signup", signUp)
authRouter.post("/login", login)
authRouter.post("/logout", logOut)
authRouter.post("/forget", forgetPassword)

export default authRouter