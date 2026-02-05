import { useEffect, useState, type ChangeEvent } from "react";
import Movie_card from "../components/Movie_card";
import "../css/Home.css";
import axios from "axios";
let imgUrl: string[] = [];
const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState<any>({}); // Initialize movies as an empty object
  // const [imgUrl, setImgUrl] = useState([]); // Initialize imgUrl as an empty array
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadMovies = () => {
      try {
        const getMovies = async () => {
          axios
            .get(`http://www.omdbapi.com/?apikey=9ea626c0&s=avengers`)
            .then((response) => {
              console.log(response.data, "GetM.tsx");
              // return response.data;
              setMovies(response.data);
              response.data.Search.map((movie: any, index: number) => {
                const url = String(movie.Poster) ;
                const spiltImgUrl = url.split("-").slice(-1).toString();
                const final = `https://www.${spiltImgUrl}`;
                imgUrl[index] = final;
                console.log( "GetM.tsx", final);
                // console.log(imgUrl, "GetM.tsx")
              });
            });
        };
        getMovies();
      } catch (err: any) {
        setError(err);
        console.error("Error loading movies:", error);
      } finally {
        console.log("Finished loading movies" + loading.toString());
        setLoading(false);
      }
    };

    loadMovies();
  }, []);
  const handleSearch = (e: ChangeEvent) => {
    e.preventDefault();
    // const movies = getMoviesByTitle(searchQuery);
    console.log("Searching for:" + movies);
    setSearchQuery("");
    // Implement search functionality here
  };

  return (
    <div className="Home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          name=""
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for Movies..."
          className="search-input"
        />
        <button type="submit" className="btn btn-primary search-button">
          Search
        </button>
      </form>
      {/* <i>
        movies data: {loading ? "Loading..." : JSON.stringify(movies)}
      </i> */}
      <p>
        {movies.Search
          ? movies.Search.length + " Movies Found"
          : "No Movies Found"}
      </p>

      <div className="grid movies-grid">
        {movies.Search &&
          movies.Search.map((movie: any, index: number) => (
            <Movie_card movie={movie} key={movie.imdbID} customUrl={imgUrl[index]} />
          ))}
      </div>
    </div>
  );
};

export default Home;
