import React, { useEffect, useState } from "react";
import closeIcon from "./../../assets/icons/close.svg";
import { Button } from "../ui/button";
import { addAssetTicket } from "@/services/api";

const initialTicketValues = {
  title: "",
  description: "",
  status: "New",
  severity: "",
  asset: "",
};

const NewTicket = ({ setShowNewTicket, assetId }) => {
  const [newTicket, setNewTicket] = useState(initialTicketValues);

  const onValueChange = (e) => {
    setNewTicket({ ...newTicket, [e.target.name]: e.target.value });
  };

  const onReset = () => {
    setNewTicket(initialTicketValues);
    setShowNewTicket(false);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(newTicket);
    const response = await addAssetTicket(newTicket);
    if (response.added) {
      window.alert(response.msg);
      setNewTicket(initialTicketValues);
      setShowNewTicket(false);
    }
  };
  useEffect(() => {
    setNewTicket({ ...newTicket, asset: assetId });
  }, []);
  return (
    <div className="absolute w-screen h-screen top-0 left-0 bg-slate-800/40 flex justify-center items-center">
      <div className="bg-white w-[1000px] p-8 rounded-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-slate-600">New Ticket</h2>
          <img
            src={closeIcon}
            className="w-8 cursor-pointer"
            onClick={() => setShowNewTicket(false)}
          />
        </div>
        <form
          onSubmit={onSubmit}
          className="mt-8 grid grid-cols-2 gap-x-4 gap-y-2"
        >
          <div className="col-span-2 grid grid-cols-[100px_auto] items-center">
            <label>Title</label>
            <input
              name="title"
              defaultValue={newTicket.title}
              className="p-2 rounded-lg border"
              onChange={onValueChange}
            />
          </div>
          <div className="col-span-2 grid grid-cols-[100px_auto] items-center">
            <label>Description</label>
            <textarea
              name="description"
              defaultValue={newTicket.description}
              className="p-2 resize-none rounded-lg border"
              onChange={onValueChange}
            />
          </div>
          <div className="grid grid-cols-[100px_auto] items-center">
            <label>Severity</label>
            <select
              name="severity"
              onChange={onValueChange}
              className="p-2 resize-none rounded-lg border"
              defaultValue="DEFAULT"
            >
              <option value="DEFAULT">Select Severity</option>
              <option value="Critical">Critical</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          <div className="col-span-2 flex justify-end gap-2">
            <Button onClick={onReset} variant="outline">
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewTicket;
