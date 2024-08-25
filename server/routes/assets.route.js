import express from 'express'
import { addAsset, getAllTAssets } from '../controller/assets.controller.js'

const router = express.Router()

router.get("/", getAllTAssets)
router.post("/",addAsset)
router.post("/category")
export default router