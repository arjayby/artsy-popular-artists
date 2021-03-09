import { useQuery } from "@apollo/client";
import "./Artist.css";
import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { getArtistById } from "../../queries/artists";
import { ArtistType } from "../../types/artist";

type ArtistData = {
  artist: ArtistType;
};

const Artist: React.FC = () => {
  const params: { id: string } = useParams();
  const history = useHistory();

  const { loading, data, error } = useQuery<ArtistData>(
    getArtistById(params.id)
  );

  return (
    <div className="container">
      {error && "Something went wrong 😡"}
      {loading && "Loading Artist's Artworks 🚀"}
      <div className="top">
        <button onClick={history.goBack}>⬅</button>
        <h1>{data?.artist.name}</h1>
      </div>
      <div className="center">
        <p className="artist-bio">{data?.artist.bio}</p>
        <div className="bottom">
          {data?.artist.artworks?.map((artwork) => (
            <div key={artwork.id}>
              <div className="artwork">{artwork.title}</div>
              {/* Access Denied. Cannot load image url */}
              <img alt="" src={artwork.image.image_url} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artist;
