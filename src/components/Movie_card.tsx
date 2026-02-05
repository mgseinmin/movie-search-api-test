import { useState } from "react";
import "../css/MovieCard.css";

interface MovieCardProps {
  movie: { imdbID: number; Title: string; Year: number; Poster: string };
  customUrl: string;
  // accept obj as prop;
}

const Movie_card = ({ movie , customUrl}: MovieCardProps) => {
  const [isFavorite, setFavorite] = useState(true); ///favorite button state
  // const mUrl = movie.poster;
  // const ImgUrl = new URL(ImgUrlStr);
  // const urlPath = ImgUrl.pathname;
  console.log(movie, "Movie_card.tsx");
  return (
    <div className="center movie-card">
      <div className="movie-poster">
        <img src={customUrl} />
        <div className="movie-overlay">
        {/* imgsrc={movie.poster} /> */}
          <button
            className={`favorite-btn ${isFavorite ? "active" : ""}`}
            onClick={() => setFavorite(!isFavorite)}
          >
            {!isFavorite && "♥"}
            {isFavorite && "♡"}
          </button>
        </div>
      </div>

      <div className="movie-info">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </div>
    </div>
  );
};

export default Movie_card;
