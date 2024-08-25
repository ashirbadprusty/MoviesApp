import React, { useEffect, useState } from "react";
import genreids from "../utility/genre";

const WatchList = ({ watchlist, setWatchList, handleRemoveFromWatchList }) => {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [currGenre, setCurrGenre] = useState("All Genres");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleFilter = (genre) => {
    setCurrGenre(genre);
  };

  // Sorting by Ratings
  const sortRatingsIncreasing = () => {
    const sortedIncreasing = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchList([...sortedIncreasing]);
  };

  const sortRatingsDecreasing = () => {
    const sortedDecreasing = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchList([...sortedDecreasing]);
  };

  // Sorting by Popularity
  const sortPopularityIncreasing = () => {
    const sortedIncreasing = watchlist.sort((movieA, movieB) => {
      return movieA.vote_count - movieB.vote_count;
    });
    setWatchList([...sortedIncreasing]);
  };

  const sortPopularityDecreasing = () => {
    const sortedDecreasing = watchlist.sort((movieA, movieB) => {
      return movieB.vote_count - movieA.vote_count;
    });
    setWatchList([...sortedDecreasing]);
  };

  useEffect(() => {
    const temp = new Set(
      watchlist.map((movieObj) => genreids[movieObj.genre_ids[0]])
    );
    setGenreList(["All Genres", ...temp]);
  }, [watchlist]);

  return (
    <>
      <div className="flex justify-center flex-wrap gap-4 m-4">
        {genreList.map((genre) => (
          <div
            key={genre}
            onClick={() => handleFilter(genre)}
            className={
              currGenre === genre
                ? "flex justify-center items-center bg-blue-400 rounded-xl h-[2.5rem] w-[8rem] sm:h-[3rem] sm:w-[9rem] text-white font-bold cursor-pointer"
                : "flex justify-center items-center bg-gray-400 rounded-xl h-[2.5rem] w-[8rem] sm:h-[3rem] sm:w-[9rem] text-white font-bold cursor-pointer"
            }
          >
            {genre}
          </div>
        ))}
      </div>

      <div className="flex justify-center my-4">
        <input
          type="text"
          onChange={handleSearch}
          value={search}
          placeholder="Search Movies"
          className="h-[2.5rem] w-[14rem] sm:h-[3rem] sm:w-[18rem] bg-gray-200 outline-none p-2 sm:p-4 rounded"
        />
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200 m-4 sm:m-8">
        <table className="w-full text-center text-gray-700">
          <thead className="border-b-2 bg-gray-100">
            <tr>
              <th className="px-4 py-2 sm:px-6 sm:py-4">Name</th>
              <th className="px-4 py-2 sm:px-6 sm:py-4">
                <div className="flex items-center justify-center gap-1 sm:gap-2">
                  <i
                    className="fa-solid fa-arrow-up cursor-pointer"
                    onClick={sortRatingsIncreasing}
                  ></i>
                  <span>Ratings</span>
                  <i
                    className="fa-solid fa-arrow-down cursor-pointer"
                    onClick={sortRatingsDecreasing}
                  ></i>
                </div>
              </th>
              <th className="px-4 py-2 sm:px-6 sm:py-4">
                <div className="flex items-center justify-center gap-1 sm:gap-2">
                  <i
                    className="fa-solid fa-arrow-up cursor-pointer"
                    onClick={sortPopularityIncreasing}
                  ></i>
                  <span>Popularity</span>
                  <i
                    className="fa-solid fa-arrow-down cursor-pointer"
                    onClick={sortPopularityDecreasing}
                  ></i>
                </div>
              </th>
              <th className="px-4 py-2 sm:px-6 sm:py-4">Genre</th>
              <th className="px-4 py-2 sm:px-6 sm:py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {watchlist
              .filter((movieObj) => {
                return (
                  (currGenre === "All Genres" ||
                    genreids[movieObj.genre_ids[0]] === currGenre) &&
                  movieObj.title.toLowerCase().includes(search.toLowerCase())
                );
              })
              .map((movieObj) => (
                <tr
                  key={movieObj.id}
                  className="border-b-2 hover:bg-gray-50"
                >
                  <td className="flex items-center px-4 py-2 sm:px-6 sm:py-4">
                    <img
                      className="h-[4rem] w-[8rem] sm:h-[6rem] sm:w-[10rem] object-cover rounded"
                      src={`https://tmdb.org/t/p/original/${movieObj.backdrop_path}`}
                      alt={movieObj.title}
                    />
                    <div className="ml-4 text-sm sm:ml-8 sm:text-base">{movieObj.title}</div>
                  </td>
                  <td className="px-4 py-2 sm:px-6 sm:py-4">{movieObj.vote_average}</td>
                  <td className="px-4 py-2 sm:px-6 sm:py-4">{movieObj.vote_count}</td>
                  <td className="px-4 py-2 sm:px-6 sm:py-4">
                    {genreids[movieObj.genre_ids[0]]}
                  </td>
                  <td
                    className="px-4 py-2 sm:px-6 sm:py-4 text-red-500 cursor-pointer"
                    onClick={() => handleRemoveFromWatchList(movieObj)}
                  >
                    Delete
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default WatchList;
