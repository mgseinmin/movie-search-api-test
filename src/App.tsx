import "./css/App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
// import {getMovies , getMoviesByTitle} from "./service/GetM";
// import { useEffect } from "react";
function App() {
  // let moviesData = getMovies();
  // console.log(moviesData);
    return (
    <>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
