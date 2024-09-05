import Comment from "../model/comment.model.js";
import Ticket from "../model/ticket.model.js";

export const getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find();
    if (tickets) {
      return res.status(200).json({ count: tickets.length, tickets: tickets });
    } else return res.status(204).json({ count: 0, msg: "No tickets found" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: "Something went wrong" });
  }
};

export const getAssetTickets = async (req, res) => {
  console.log(`Request for asset tickets ${req.params.assetId}`);
  const { assetId } = req.params;
  try {
    const tickets = await Ticket.find({ asset: assetId });
    if (tickets) {
      console.log(tickets);
      return res.status(200).json({ count: tickets.length, tickets: tickets });
    } else return res.status(204).json({ count: 0, msg: "No tickets found" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: "Something went wrong" });
  }
};

export const getTicketDetails = async (req, res) => {
  console.log(`Request for ticket details ${req.params.assetId}`);
  const { ticketId } = req.params;
  try {
    const ticket = await Ticket.findById(ticketId).populate('asset');
    if (ticket) {
      console.log(ticket);
      return res.status(200).json(ticket);
    } else return res.status(204).json({ msg: "No tickets found" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: "Something went wrong" });
  }
};


export const addAssetTicket = async (req, res) => {
  console.log("REquest for new ticket", req.body);
  try {
    const ticket = new Ticket(req.body);
    const ticketAdded = await ticket.save();
    if (ticketAdded) {
      return res.status(200).json(ticketAdded);
    }
  } catch (error) {
    console.log(err);
    return res.status(401).json({ msg: "Failed" });
  }
};

export const addTicketComment = async (req, res) => {
  console.log(req.body);
  const { ticketId } = req.params;
  const { content } = req.body;
  const author = "64c5654f729017599415e274"; // this will be handled by middle using user's authentication header information

  const newComment = new Comment({ author, content });

  const ticketFound = await Ticket.findById(ticketId);
  ticketFound.comments.push(newComment);
  const ticketUpdated = await ticketFound.save();

  if (ticketUpdated) {
    console.log("Ticket Updated");
    return res.status(200).json(newComment);
  } else return res.status(400);
};


export const getTicketComments = async (req,res) => {
    const {ticketId} = req.params
    try{
        const ticket = await Ticket.findById(ticketId)
        return res.status(200).json(ticket.comments)
    }
    catch(error){
        return res.status(400).json({error: error.msg})
    }
}