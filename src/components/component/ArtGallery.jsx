// src/pages/ArtGallery.js
import { lazy, Suspense, useEffect, useState } from "react";
import { fetchArtworkData } from "../../FirebaseFunctions";
// import ArtCard from "./ArtCard";
import { BeatLoader } from "react-spinners";
const ArtCard = lazy(() => import("./ArtCard"));

const ArtGallery = () => {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchArtworkData();
      setArtworks(data);
    };
    getData();
  }, []);

  return (
    <Suspense fallback={<BeatLoader color="blue" />}>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-8 w-full">
        {artworks.map((art, index) => (
          <ArtCard
            key={index}
            title={art.title}
            description={art.description}
            price={art.price}
            imageUrl={art.imageUrl}
            artwork={art}
          />
        ))}
      </div>
    </Suspense>
  );
};

export default ArtGallery;
