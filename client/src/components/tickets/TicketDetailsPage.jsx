import React, { useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import TicketCommentBox from "./TicketCommentBox";

const TicketDetailsPage = ({ ticket, asset, setOpenTicket }) => {
  const [showCommentBox,setShowCommentBox] = useState(false)
  //console.log(ticket);
  //console.log(asset);
  return (
    <div className="w-full h-full grid grid-cols-[auto_350px] gap-x-4">
      <div className="flex flex-col gap-4 overflow-y-scroll pl-4 py-4">
        <Card className="flex flex-col gap-4 justify-between item-center bg-primary-foreground card p-4">
          <h2 className="text-xl font-semibold text-primary">{ticket.title}</h2>
          <p className="text-primary/60">{ticket.description}</p>
        </Card>
        <div className="">
          <h2 className="text-xl font-semibold mb-2 mt-4 text-gray-600">
            Asset Details
          </h2>
          <Card className="flex flex-col gap-4 justify-between item-center bg-primary-foreground card p-4">
            <h2 className="text-lg font-semibold text-primary">
              {asset.assetName}
            </h2>
            <p className="text-primary/60">{asset.description}</p>
            <div className="flex justify-between">
              <p className="text-primary/60">
                <span className="font-semibold">Type: </span>
                {asset.assetType.name}
              </p>
              <p className="text-primary/60">
                <span className="font-semibold">Serial: </span>
                {asset.assetSerial}
              </p>
            </div>
          </Card>
        </div>

        <div>
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold mb-2 mt-4 text-gray-600">
              Comments
            </h2>
            <button className="bg-white border rounded-lg p-2 text-xs" onClick={()=>setShowCommentBox(true)}>
              Add Comment
            </button>
          </div>
          {showCommentBox && <TicketCommentBox ticketId={ticket._id} setShowCommentBox={setShowCommentBox}/>}
          <div className="mt-4 flex flex-col gap-4">
            {ticket.comments.length > 0 ? (
              ticket.comments.map((comment) => (
                <Card className="bg-card-foreground p-2">
                  <h4>{comment.author}</h4>
                  <p>{comment.content}</p>
                </Card>
              ))
            ) : (
              <Card className="bg-primary-foreground p-4 text-primary/60 text-sm flex flex-col gap-2">
                No comments found
              </Card>
            )}
          </div>
        </div>
      </div>
      <div className="sticky h-full flex flex-col justify-between border-l-2 pl-4 border-dashed pt-4 border-gray-300">
        <div className="flex flex-col gap-4">
          <Card className="bg-primary-foreground p-4 text-primary/60 text-sm flex flex-col gap-2">
            <p className="font-semibold text-lg text-primary ">
              Ticket Details</p>
              <form className="text-primary/60 text-sm mt-2 flex flex-col gap-2">
                <p className="font-normal mb-2">
                  <span className="font-semibold">Created : </span>
                  {new Date(ticket.createdAt).toLocaleString()}
                </p>
                <p className="font-normal">
                  <span className="font-semibold">Updated : </span>
                  {new Date(ticket.updatedAt).toLocaleString()}
                </p>
                <p className="font-normal">
                  <label className="font-semibold">Severity : </label>
                  <select defaultValue={ticket.severity} className="bg-gray-100 p-2 rounded-md">
                    <option>Critical</option>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                </p>
                <p className="font-normal">
                  <label className="font-semibold">Status : </label>
                  <select defaultValue={ticket.status} className="bg-gray-100 p-2 rounded-md">
                    <option>Open</option>
                    <option>In Progress</option>
                    <option>Awaiting vendor response</option>
                    <option>Closed</option>
                  </select>
                </p>
              </form>
            
          </Card>
          <Card className="bg-primary-foreground p-4 text-primary/60 text-sm flex flex-col gap-2">
            <form>
              <label
                className="font-semibold text-lg text-primary"
              >
                Assignee:
              </label>
              <input
                list="browsers"
                name="browser"
                id="browser"
                defaultValue="Mubasshir Farooqui"
                className="bg-gray-100 mt-2 p-2 rounded-md"
              />
              <datalist id="browsers">
                <option value="Mubasshir Farooqui" />
                <option value="Sachin Tendulkar" />
                <option value="MS Dhoni" />
                <option value="Virat Kohli" />
                <option value="Rohit Sharma" />
              </datalist>
            </form>
          </Card>
          <Card className="bg-primary-foreground p-4 text-primary/60 text-sm flex flex-col gap-2">
            <p className="font-semibold text-lg text-primary ">
              Vendor Details
            </p>
            <p>
              <span className="font-semibold">Created : </span>
              {new Date(ticket.createdAt).toLocaleString()}
            </p>
            <p>
              <span className="font-semibold">Updated : </span>
              {new Date(ticket.updatedAt).toLocaleString()}
            </p>
            <p>
              <span className="font-semibold">Severity : </span>
              {ticket.severity}
            </p>
            <p>
              <span className="font-semibold">Status : </span>
              {ticket.status}
            </p>
          </Card>
        </div>
        <div className="flex gap-2">
          <Button
            className="flex-1"
            variant="outline"
            onClick={() => setOpenTicket(false)}
          >
            Cancel
          </Button>
          <Button className="flex-1">Save</Button>
        </div>
      </div>
    </div>
  );
};

export default TicketDetailsPage;
