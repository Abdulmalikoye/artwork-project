import React from "react";
import { Link } from "react-router-dom";
import profile1 from "../../img/profile1.svg";
import profile2 from "../../img/profile2.svg";
import profile3 from "../../img/profile3.svg";
import profile4 from "../../img/profile4.svg";
import profile5 from "../../img/profile5.svg";
import profile6 from "../../img/profile6.svg";
import cover1 from "../../img/cover1.svg";
import cover2 from "../../img/cover1.svg";
import cover3 from "../../img/cover2.svg";
import cover4 from "../../img/cover3.svg";
import cover5 from "../../img/cover4.svg";
import cover6 from "../../img/cover5.svg";

const ArtProfileGallery = ({ imageSrc, name }) => (
  <section className="md:px-32 md:py-24 px-6 py-12 bg-white">
    <div className="flex flex-col md:flex-row justify-between md:items-center items-start gap-4 mb-12">
      <div className="md:w-[60%]  space-y-4 gap-4 ">
        <h1 className="md:text-5xl text-2xl  font-bold">Our Top Artist</h1>
        <p className="text-base md:text-lg">
          NFT's are transforming the way commerce is transacted, contracts are
          enforced investme are held, and value is transferred every tree in the
          forest knows
        </p>
      </div>
      <Link
        to="/register"
        target="_blank"
        className="bg-[#6271EB] md:px-8 px-5 py-3 rounded-md text-white md:texl-xl text-base"
      >
        See all artist
      </Link>
    </div>
    <div className="grid md:grid-cols-3 gap-8">
      <div className=" bg-[#1E2238]">
        <div className="rounded-t-md ">
          <img src={cover1} alt="" className="w-full" />
        </div>
        <div className=" mt-[-10%] flex items-center justify-center">
          <img
            src={profile1}
            alt=""
            className=" p-4 rounded-full bg-[#1E2238]"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-3  py-5 px-7">
          <h1 className="font-bold text-white text-2xl">Hephective</h1>
          <p className="text-white text-center">
            NFT's are transform the way commerce things.
          </p>
          <Link
            to="/register"
            target="_blank"
            className="border-2 border-white w-full px-8 py-3 rounded-md text-white text-center"
          >
            Follow
          </Link>
        </div>
      </div>
      <div className=" bg-[#1E2238]">
        <div className="rounded-t-md">
          <img src={cover2} alt="" className="w-full" />
        </div>
        <div className=" mt-[-10%] flex items-center justify-center">
          <img
            src={profile2}
            alt=""
            className=" p-4 rounded-full bg-[#1E2238]"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-3  p-5">
          <h1 className="font-bold text-white text-2xl">Timmy</h1>
          <p className="text-white text-center">
            NFT's are transform the way commerce things.
          </p>
          <Link
            to="/register"
            target="_blank"
            className="border-2 border-white w-full px-8 py-3 rounded-md text-white text-center"
          >
            Follow
          </Link>
        </div>
      </div>
      <div className=" bg-[#1E2238]">
        <div className="rounded-t-md">
          <img src={cover3} alt="" className="w-full" />
        </div>
        <div className=" mt-[-10%] flex items-center justify-center">
          <img
            src={profile3}
            alt=""
            className=" p-4 rounded-full bg-[#1E2238]"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-3  p-5">
          <h1 className="font-bold text-white text-2xl">Kingsley</h1>
          <p className="text-white text-center">
            NFT's are transform the way commerce things.
          </p>
          <Link
            to="/register"
            target="_blank"
            className="border-2 border-white w-full px-8 py-3 rounded-md text-white text-center"
          >
            Follow
          </Link>
        </div>
      </div>
      <div className=" bg-[#1E2238]">
        <div className="rounded-t-md">
          <img src={cover4} alt="" className="w-full" />
        </div>
        <div className=" mt-[-10%] flex items-center justify-center">
          <img
            src={profile4}
            alt=""
            className=" p-4 rounded-full bg-[#1E2238]"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-3  p-5">
          <h1 className="font-bold text-white text-2xl">Khalid</h1>
          <p className="text-white text-center">
            NFT's are transform the way commerce things.
          </p>
          <Link
            to="/register"
            target="_blank"
            className="border-2 border-white w-full px-8 py-3 rounded-md text-white text-center"
          >
            Follow
          </Link>
        </div>
      </div>
      <div className=" bg-[#1E2238]">
        <div className="rounded-t-md">
          <img src={cover6} alt="" className="w-full" />
        </div>
        <div className=" mt-[-10%] flex items-center justify-center">
          <img
            src={profile6}
            alt=""
            className=" p-4 rounded-full bg-[#1E2238]"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-3  p-5">
          <h1 className="font-bold text-white text-2xl">Fulfilment</h1>
          <p className="text-white text-center">
            NFT's are transform the way commerce things.
          </p>
          <Link
            to="/register"
            target="_blank"
            className="border-2 border-white w-full px-8 py-3 rounded-md text-white text-center"
          >
            Follow
          </Link>
        </div>
      </div>
      <div className=" bg-[#1E2238]">
        <div className="rounded-t-md">
          <img src={cover2} alt="" className="w-full" />
        </div>
        <div className=" mt-[-10%] flex items-center justify-center">
          <img
            src={profile2}
            alt=""
            className=" p-4 rounded-full bg-[#1E2238]"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-3  p-5">
          <h1 className="font-bold text-white text-2xl">Maleekberry</h1>
          <p className="text-white text-center">
            NFT's are transform the way commerce things.
          </p>
          <Link
            to="/register"
            target="_blank"
            className="border-2 border-white w-full px-8 py-3 rounded-md text-white text-center"
          >
            Follow
          </Link>
        </div>
      </div>
    </div>
  </section>
);

// const NFTArtistGallery = () => {
//   const artists = [
//     { name: "Jane Cooper", image: "/api/placeholder/300/200" },
//     { name: "Jane Cooper", image: "/api/placeholder/300/200" },
//     { name: "Jane Cooper", image: "/api/placeholder/300/200" },
//     { name: "Jane Cooper", image: "/api/placeholder/300/200" },
//     { name: "Jane Cooper", image: "/api/placeholder/300/200" },
//     { name: "Jane Cooper", image: "/api/placeholder/300/200" },
//   ];

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-2">Our Top Artist</h1>
//       <p className="text-gray-600 mb-8">
//         NFT's are transforming the way commerce is transacted, contracts are
//         enforced investments are held, and value is transferred every time in
//         the fastest knows
//       </p>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {artists.map((artist, index) => (
//           <ArtistCard key={index} imageSrc={artist.image} name={artist.name} />
//         ))}
//       </div>
//     </div>
//   );
// };

export default ArtProfileGallery;
