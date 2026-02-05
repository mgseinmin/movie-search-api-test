import axios from "axios";
export const getMoviesByTitle = (title: string) => {
    axios
      .get(`http://www.omdbapi.com/?t=${title}&apikey=9ea626c0`)
      .then((response) => {
        console.log(response.data);
        
        return response.data;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
      
    };
export const getMovies = () => {
    axios
      .get(`http://www.omdbapi.com/?t=bat&apikey=9ea626c0`)
      .then((response) => {
        // console.log(response.data , "GetM.tsx");
        return JSON.parse(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    };
