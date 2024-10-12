import React, { useState } from "react";

const AddUser = ({ closePopup }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");

  // const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ name, description, price });
    // handleClose();
  };

  return (
    <>
      <div className="">
        <div className="bg-white rounded-lg p-8 w-full ">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-bold mb-3">Add new NFT</h2>
            {/* <button onClick={closePopup}>
              <ion-icon name="close-outline"></ion-icon>
            </button> */}
          </div>
          <p className="text-gray-600 mb-6">
            Upload an item
            <br />
            But each one takes a different approach and makes different
            tradeoffs.
          </p>

          <div className=" border-dashed border-2 border-gray-300 rounded-lg p-4 mb-4 flex justify-center items-center">
            <div className="text-center">
              <div className="text-4xl mb-2">☁️</div>
              <p className="text-gray-600">Drag your item to upload</p>
              <p className="text-gray-400 text-sm">
                PNG, GIF, WebP, MP4 or MP3. Maximum file size 100 Mb.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-600">
                Name your item
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="e.g. Redeemable T-Shirt with Logo"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-600">
                Enter short description
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="e.g. After purchase you will get a T-Shirt"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-600">
                Set item price or starting bid
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="e.g. 0,01 Eth"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#6271EB] text-white p-3 rounded-lg font-medium hover:bg-blue-600 transition"
            >
              Publish
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddUser;
