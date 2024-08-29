import React, { useState } from "react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import NewTicket from "./NewTicket";
import useTickets from "@/hooks/useTickets";

const AssetTickets = ({ assetId }) => {
  const [showNewTicket, setShowNewTicket] = useState(false);
  const { tickets } = useTickets(assetId);

  const navigate = useNavigate();

  //   const handleNewTicket = () => {
  //     navigate("new-ticket", { state: { asset } });
  //   };
  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-slate-600">Tickets</h2>
        <button
          className="border bg-white text-sm text-slate-600 font-semibold p-2 rounded-lg"
          onClick={() => setShowNewTicket(true)}
        >
          New Ticket
        </button>
      </div>
      {tickets ? (
        <div>
          {tickets.tickets.map((ticket) => (
            <div className="bg-white mt-2 rounded-lg px-8 py-4 flex flex-col gap-4">
              <div>
                <h2 className="text-slate-600 font-semibold">{ticket.title}</h2>
                <p className="mt-1 text-sm text-slate-400">
                  {ticket.description}
                </p>
              </div>
              <div className="text-xs text-slate-500 flex justify-between">
                <p><span className="font-semibold">Created:</span> {(new Date(ticket.createdAt).toDateString())}</p>
                <p><span className="font-semibold">Last Update:</span> {(new Date(ticket.updatedAt).toDateString())}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white mt-2 rounded-lg px-8 py-4">
          No tickets found
        </div>
      )}

      {showNewTicket && (
        <NewTicket assetId={asset._id} setShowNewTicket={setShowNewTicket} />
      )}
    </div>
  );
};

export default AssetTickets;
