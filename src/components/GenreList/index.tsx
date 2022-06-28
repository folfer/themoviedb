import React from "react";
import { Genre } from "./styles";

interface GenreProps {
  genres: string[];
}

const GenreList: React.FC<GenreProps> = ({ genres }) => {
  return (
    <>
      {genres.map((genre) => (
        <Genre key={genre} className="card-genre">
          {genre}
        </Genre>
      ))}
    </>
  );
};

export default GenreList;
