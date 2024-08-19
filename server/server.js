import dotenv from 'dotenv'
import express from 'express'
import { connect_DB } from './database/db.js'

import UsersRouter from './routes/users.route.js'
import TicketsRouter from './routes/tickets.route.js'
import AssetsRouter from './routes/assets.route.js'
import VendorRouter from './routes/vendors.route.js'

dotenv.config()

const PORT = process.env.PORT

const app = express()
app.use(express.json())

//console.log(process.env.DB_URL)
connect_DB()

app.use("/users", UsersRouter)
app.use("/assets", AssetsRouter)
app.use("/vendors", VendorRouter)
app.use("/tickets", TicketsRouter)
app.get("/", (req,res) => {
    console.log("Server working")
})

app.listen(PORT, () => {
    console.log(`Server working on port ${PORT}`)
})