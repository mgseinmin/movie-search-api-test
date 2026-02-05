import axios from "axios";
export const getMoviesByTitle = async (title) => {
  try {
    const response = await axios.get(`http://www.omdbapi.com/?s=${title}&apikey=YOUR_API_KEY`);
    return response.data.Search || [];
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};