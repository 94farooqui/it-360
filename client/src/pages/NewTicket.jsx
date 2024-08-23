import NewTicketForm from "@/components/tickets/NewTicketForm";
import React from "react";

const NewTicket = () => {
  console.log("Hello New ticket");
  return (
    <div className="w-screen h-screen bg-slate-800/30 fixed top-0 left-0 flex justify-center items-center">
      h{" "}
      <div className="w-[800px] p-8 bg-white rounded-lg flex flex-col">
        <h2 className="text-xl font-bold">New Ticket</h2>
        <NewTicketForm/>
      </div>
    </div>
  );
};

export default NewTicket;
