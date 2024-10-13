// src/pages/ArtGallery.js
import { useEffect, useState } from "react";
import { fetchArtworkData } from "../../FirebaseFunctions";
import ArtCard from "./ArtCard";

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
  );
};

export default ArtGallery;
