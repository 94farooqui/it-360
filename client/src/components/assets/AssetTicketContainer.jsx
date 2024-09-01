import React from "react";
import closeIcon from './../../assets/icons/close.svg'
import TicketDetailsPage from "../tickets/TicketDetailsPage";

const AssetTicketContainer = ({ asset,ticket, setOpenTicket }) => {
  return (
    <div className="absolute w-screen h-screen top-0 left-0 bg-slate-800/70 flex justify-center items-center">
      <div className="w-[1200px] h-[800px] bg-gray-200 p-4 rounded-lg">
        
        <TicketDetailsPage asset={asset} ticket={ticket} setOpenTicket={setOpenTicket}/>
      </div>
    </div>
  );
};

export default AssetTicketContainer;
