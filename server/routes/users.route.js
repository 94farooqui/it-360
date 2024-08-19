import express from 'express'
import { getAllUsers } from '../controller/users.controller.js'
import { addUser } from '../controller/users.controller.js'
import { updateUser } from '../controller/users.controller.js'
import { deleteUser } from '../controller/users.controller.js'

const router = express.Router()

router.get("/", getAllUsers)
router.post("/", addUser)
router.put("/:userId",updateUser)
router.delete("/:userId", deleteUser)

export default router