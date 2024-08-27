
import { Button } from "@/components/ui/button";
import useAssets from "@/hooks/useAssets";
import { addNewVendor } from "@/services/api";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const initialVendor = {
    name: "",
    logoImage: "",
    email: "",
    contact_number: "",
    portal:""
}

const AddVendor = ({ setShowNewVendor }) => {
    const navigate = useNavigate();
    const { categories } = useAssets()
    const [newVendor, setNewVendor] = useState(initialVendor)
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

    const handleInputChange = (e) => {
        setNewVendor({ ...newVendor, [e.target.name]: e.target.value })
    }

    const handleCancel = () => {
        setNewVendor(initialVendor)
        setShowNewVendor(false)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(newVendor)
        const result = await addNewVendor(newVendor)
        if (result.added) {
            window.alert(result.msg)
            setNewVendor(initialVendor)
            setShowNewVendor(false)
        }
    }
    return (
        <div className="absolute top-0 left-0 w-screen h-screen bg-slate-800/40 flex justify-center items-center">
            <div className="w-[800px] p-8 rounded-xl bg-white">
                <div className="w-full">
                    <h2 className="text-3xl font-bold text-slate-800 mb-8">Add Vendor</h2>
                    <div className="flex items-start gap-4">
                        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
                            
                        <div className="w-full grid grid-cols-[150px_auto] items-center">
                                <label className="text-lg mr-4 font-semibold text-slate-600">
                                    Name
                                </label>
                                <input name="name" onChange={(e) => handleInputChange(e)} className="p-2 border-2 rounded-lg" placeholder="" />
                            </div>
                            <div className="w-full grid grid-cols-[150px_auto] items-center">
                                <label className="text-lg mr-4 font-semibold text-slate-600">
                                    Email
                                </label>
                                <input
                                    name="email"
                                    onChange={(e) => handleInputChange(e)}
                                    className=" p-2 border-2 rounded-lg"
                                    placeholder=""
                                />
                            </div>
                            <div className="w-full grid grid-cols-[150px_auto] items-center">
                                <label className="text-lg mr-4 font-semibold text-slate-600">
                                    Phone
                                </label>
                                <input
                                    name="contact_number"
                                    onChange={(e) => handleInputChange(e)}
                                    className="resize-none p-2 border-2 rounded-lg"
                                    placeholder=""
                                />
                            </div>
                            <div className="w-full grid grid-cols-[150px_auto] items-center">
                                <label className="text-lg mr-4 font-semibold text-slate-600">
                                    Support Portal
                                </label>
                                <input
                                    name="portal"
                                    onChange={(e) => handleInputChange(e)}
                                    className="resize-none p-2 border-2 rounded-lg"
                                    placeholder=""
                                />
                            </div>
                            <div className="flex gap-2 self-end text-lg">
                                <Button variant="outline" onClick={handleCancel}>
                                    Cancel
                                </Button>
                                <Button type="submit" className="self-end text-lg">Save</Button>
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
        </div>
    );
};

export default AddVendor;
