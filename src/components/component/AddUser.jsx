import React, { useState } from "react";
import BreadCrumbs from "./BreadCrumbs";
// import { useState } from "react";
import { handleImageUpload, saveImageData } from "../../FirebaseFunctions";
import SuccessArt from "./SuccessArt";

const AddUser = ({ closePopup }) => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [pop, setPop] = useState(false);
  const [loading, setLoading] = useState(false);

  // const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file && title && description && price) {
      // Upload the image and get the URL
      const imageUrl = await handleImageUpload(file);

      // Prepare data including image URL, title, description, and price
      const imageData = {
        title,
        description,
        price,
        imageUrl,
      };

      // Save the data to Firestore
      await saveImageData(imageData);
      alert("Artwork uploaded!");

      // Reset form fields after submission
      setFile(null);
      setTitle("");
      setDescription("");
      setPrice("");
    } else {
      alert("Please fill in all fields");
    }
    setLoading(false);
    setPop(true);
  };

  return (
    <>
      <BreadCrumbs />
      <div className="">
        <div className="bg-white rounded-lg px-8 w-full ">
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

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <div className=" border-dashed border-2 border-gray-300 rounded-lg p-4 mb-4 flex justify-center items-center">
                <label htmlFor="fileInput">
                  <div className="text-center">
                    <div className="text-4xl mb-2">☁️</div>
                    <p className="text-gray-600">Upload your art</p>
                    <p className="text-gray-400 text-sm">
                      PNG, GIF, WebP, MP4 or MP3. Maximum file size 5 Mb.
                    </p>
                  </div>
                </label>
              </div>
              <input
                id="fileInput"
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                required
              />
              <label
                htmlFor="titleInput"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Name your item
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="e.g. Female character"
                id="titleInput"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="descriptionInput"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Description:
              </label>
              <textarea
                id="descriptionInput"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="priceInput"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Set item price or starting bid
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                  $
                </span>
                <input
                  className="w-full p-3 pl-8 border border-gray-300 rounded-lg"
                  id="priceInput"
                  type="number"
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>
            </div>
            {loading ? (
              <button
                type="submit"
                className="w-full bg-[#6271EB] text-white p-3 rounded-lg font-medium hover:bg-blue-600 transition"
              >
                Loading...
              </button>
            ) : (
              <button
                type="submit"
                className="w-full bg-[#6271EB] text-white p-3 rounded-lg font-medium hover:bg-blue-600 transition"
              >
                Publish
              </button>
            )}

            {pop && <SuccessArt setPop={setPop} />}
          </form>
        </div>
      </div>
    </>
  );
};

export default AddUser;
