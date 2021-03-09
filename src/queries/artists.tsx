import { gql } from "@apollo/client";

export const getPopularArtists = () => gql`
  query {
    popular_artists {
      artists {
        id
        name
        bio
      }
    }
  }
`;

export const getArtistById = (id: string) => gql`
  query {
    artist(id: "${id}") {
      id
      name
      bio
      artworks {
        id
        title
        image {
          image_url
        }
      }
    }
  }
`;
