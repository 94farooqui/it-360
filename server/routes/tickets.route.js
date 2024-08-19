import express from 'express'
import { getAllTickets } from '../controller/tickets.controller.js'

const router = express.Router()

router.get("/", getAllTickets)

export default router