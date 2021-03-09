import React from "react";
import "./Home.css";
import { useHistory } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { ArtistType } from "../../types/artist";
import { getPopularArtists } from "../../queries/artists";
import { getRandomInt } from "../../utils";

const avatars = ["👨‍🎨", "👩‍🎨"];

type PopularArtistsData = {
  popular_artists: {
    artists: ArtistType[];
  };
};

const Home: React.FC = () => {
  const history = useHistory();
  const { loading, data, error } = useQuery<PopularArtistsData>(
    getPopularArtists()
  );

  const goToArtistProfile = (artistId: string) => () => {
    history.push(`/artists/${artistId}`);
  };

  return (
    <div className="container">
      <h1>Artsy 🎨 - Popular Artists</h1>
      <div className="popular">
        {error && "Something went wrong 😡"}
        {loading && "Loading Popular Artists 🚀"}
        {data?.popular_artists.artists.map((artist) => (
          <div
            className="artist-card"
            key={artist.id}
            onClick={goToArtistProfile(artist.id)}
          >
            <p className="artist-name">
              {avatars[getRandomInt(0, avatars.length - 1)]} {artist.name}
            </p>
            <p className="artist-bio">{artist.bio}</p>
            <button>Artworks ➡</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
