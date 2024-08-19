import express from 'express'
import { getAllTAssets } from '../controller/assets.controller.js'

const router = express.Router()

router.get("/", getAllTAssets)

export default router