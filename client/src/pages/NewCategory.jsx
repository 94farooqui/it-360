import { Button } from "@/components/ui/button";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const NewCategory = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  // Handle the image selection
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  // Trigger file input click
  const handleImageClick = () => {
    fileInputRef.current.click();
  };
  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-slate-800/40 flex justify-center items-center">
      <div className="w-[800px] p-8 rounded-xl bg-white"></div>
      <div className="w-full">
        <h2 className="text-3xl font-bold text-slate-800 mb-8">Add Category</h2>
        <div className="flex items-start gap-4">
          <form className="w-full flex flex-col gap-4">
            <div className="w-full grid grid-cols-[150px_auto] items-center">
              <label className="text-lg mr-4 font-semibold text-slate-600">
                Category Name
              </label>
              <input className="p-2 border-2 rounded-lg" placeholder="" />
            </div>
            <div className="w-full grid grid-cols-[150px_auto] items-center">
              <label className="text-lg mr-4 font-semibold text-slate-600">
                Description
              </label>
              <textarea
                rows={3}
                className="resize-none p-2 border-2 rounded-lg"
                placeholder=""
              />
            </div>
            <div className="flex gap-2 self-end text-lg">
              <Button variant="outline" onClick={() => navigate("/assets")}>
                Cancel
              </Button>
              <Button className="self-end text-lg">Save</Button>
            </div>
          </form>
          <div>
            <img
              src={selectedImage || "https://via.placeholder.com/150"}
              alt="Selected"
              onClick={handleImageClick}
              style={{
                cursor: "pointer",
                width: "150px",
                height: "150px",
                objectFit: "cover",
              }}
              className="border rounded-lg overflow-clip"
            />
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCategory;
