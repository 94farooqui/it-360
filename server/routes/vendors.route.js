import express from 'express'
import { getAllVendors } from '../controller/vendors.controller.js'

const router = express.Router()

router.get("/", getAllVendors)

export default router