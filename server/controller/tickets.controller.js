import Ticket from "../model/ticket.model.js"

export const getAllTickets = async (req,res) => {
    try{
        const tickets = await Ticket.find()
        if(tickets){
            return res.status(200).json({count: tickets.length, tickets:tickets})
        }
        else return res.status(204).json({count: 0, msg:"No tickets found"})
    }
    catch(error){
        console.log(error)
        return res.status(400).json({msg: "Something went wrong"})
    }
}

export const getAssetTickets = async  (req,res) => {
    console.log(`Request for asset tickets ${req.params.assetId}`)
    const {assetId} = req.params
    try{
        const tickets = await Ticket.find({asset: assetId})
        if(tickets){
            console.log(tickets)
            return res.status(200).json({count: tickets.length, tickets:tickets})
        }
        else return res.status(204).json({count: 0, msg:"No tickets found"})
    }
    catch(error){
        console.log(error)
        return res.status(400).json({msg: "Something went wrong"})
    }
}

export const addAssetTicket = async (req,res) => {
    console.log("REquest for new ticket", req.body)
    try{
        const ticket = new Ticket(req.body)
        const ticketAdded = await ticket.save()
        if(ticketAdded){
            return res.status(200).json(ticketAdded)
        }
    }
    catch(error){
        console.log(err)
        return res.status(401).json({msg:"Failed"})
    }
}

