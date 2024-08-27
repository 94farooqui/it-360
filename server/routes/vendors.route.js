import express from 'express'
import { addVendor, getAllVendors } from '../controller/vendors.controller.js'

const router = express.Router()

router.get("/", getAllVendors)
router.post("/", addVendor)

export default router