import { ArtworkType } from "./artwork";

export type ArtistType = {
  id: string;
  name: string;
  bio?: string;
  artworks?: ArtworkType[];
};
