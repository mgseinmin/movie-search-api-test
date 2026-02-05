import { useState } from "react";
import "../css/MovieCard.css";
interface MovieCardProps {
  movie: { imdbID: number; Title: string; Year: number; poster: string };
  // accept obj as prop;
}
const Movie_card = ({ movie }: MovieCardProps) => {
  const [isFavorite, setFavorite] = useState(true);
  return (
    <div className="center movie-card">
      <div className="movie-poster">
        <img src={movie.poster} alt="" />
        <div className="movie-overlay">
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
