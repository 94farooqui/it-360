import express from 'express'
import { addAssetTicket, getAllTickets, getAssetTickets,addTicketComment,getTicketComments } from '../controller/tickets.controller.js'

const router = express.Router()

router.get("/", getAllTickets)
router.post("/", addAssetTicket)
router.get("/:assetId", getAssetTickets)

router.get("/:ticketId/comments", getTicketComments)
router.post("/:ticketId/comments", addTicketComment)

export default router