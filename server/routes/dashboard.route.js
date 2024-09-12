import express from 'express'
import {getDashDetails} from './../controller/dashboard.controller.js'
import { authMiddleware } from '../middleware/auth.js'

const router = express.Router()

router.get('/',getDashDetails)


export default router