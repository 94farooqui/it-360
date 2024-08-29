import express from 'express'
import { addAssetTicket, getAllTickets, getAssetTickets } from '../controller/tickets.controller.js'

const router = express.Router()

router.get("/", getAllTickets)
router.post("/", addAssetTicket)
router.get("/:assetId", getAssetTickets)


export default router