import express from 'express'
import {userLogin,userSignup,getUserDetails} from './../controller/auth.controller.js'
import { authMiddleware } from '../middleware/auth.js'

const router = express.Router()

router.get('/',authMiddleware,getUserDetails)
router.post("/login",userLogin)
router.post("/signup",userSignup)


export default router