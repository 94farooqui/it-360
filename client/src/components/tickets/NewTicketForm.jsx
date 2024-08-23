import React from "react";

const NewTicketForm = () => {
  return (
    <div>
      <form>
        <div className="py-2">
          <input placeholder="Title" className="p-2 border rounded-lg w-full" />
        </div>
        <div className="py-2">
          <textarea
            placeholder="Description"
            rows={3}
            className="resize-none p-2 border rounded-lg w-full"
          />
        </div>
        <div className="py-2 flex gap-4">
        
        <input
          list="browsers"
          id="browser"
          name="browser"
          placeholder="Select asset"
          className="resize-none p-2 border rounded-lg"
        />

        <datalist id="browsers">
          <option value="Cisco 2906 "/>
          <option value="Cisco 2960 "/>
          <option value="Cisco 9300 "/>
          <option value="Cisco 3850 "/>
        </datalist>
          <input
            placeholder="Serial Number"
            className="resize-none p-2 border rounded-lg w-full"
          />
        </div>
        
      </form>
    </div>
  );
};

export default NewTicketForm;
