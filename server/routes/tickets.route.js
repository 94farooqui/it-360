import express from 'express'
import { addAssetTicket, getAllTickets, getAssetTickets,addTicketComment } from '../controller/tickets.controller.js'

const router = express.Router()

router.get("/", getAllTickets)
router.post("/", addAssetTicket)
router.get("/:assetId", getAssetTickets)

router.post("/:ticketId/comments", addTicketComment)

export default router