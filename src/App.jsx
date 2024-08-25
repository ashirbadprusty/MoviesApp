import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";
import Banner from "./components/Banner";
import { useEffect, useState } from "react";

function App() {
  const [watchlist, setWatchList] = useState([]);

  const handleAddtoWatchList = (movieobj) => {
    let newWatchList = [...watchlist, movieobj];
    localStorage.setItem("movies", JSON.stringify(newWatchList));
    setWatchList(newWatchList);
  };

  const handleRemoveFromWatchList = (movieobj) => {
    let filteredWatchList = watchlist.filter((movie) => {
      return movie.id !== movieobj.id;
    });
    localStorage.setItem("movies", JSON.stringify(filteredWatchList)); // Update local storage
    setWatchList(filteredWatchList);
  };

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem("movies");
    if (moviesFromLocalStorage) {
      setWatchList(JSON.parse(moviesFromLocalStorage));
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies
                  watchlist={watchlist}
                  handleAddtoWatchList={handleAddtoWatchList}
                  handleRemoveFromWatchList={handleRemoveFromWatchList}
                />
              </>
            }
          />
          <Route
            path="/watchlist"
            element={
              <WatchList
                watchlist={watchlist}
                setWatchList={setWatchList}
                handleRemoveFromWatchList={handleRemoveFromWatchList}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
