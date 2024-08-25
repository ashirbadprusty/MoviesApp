import React from "react";

const MovieCard = ({
  movieObj,
  poster_path,
  name,
  handleAddtoWatchList,
  handleRemoveFromWatchList,
  watchlist,
}) => {

  function doesContain(movieObj) {
    return watchlist.some((item) => item.id === movieObj.id);
  }

  return (
    <div
      className="h-[40vh] w-[200px] bg-center bg-cover hover:cursor-pointer hover:scale-110 duration-300 rounded-xl relative"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div
          onClick={() => {
            handleRemoveFromWatchList(movieObj);
          }}
          className="absolute top-2 right-2 h-8 w-8 flex justify-center items-center rounded-lg bg-gray-900/60 text-white"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => {
            handleAddtoWatchList(movieObj);
          }}
          className="absolute top-2 right-2 h-8 w-8 flex justify-center items-center rounded-lg bg-gray-900/60 text-white"
        >
          &#128525;
        </div>
      )}

      <div className="absolute bottom-0 w-full text-white bg-black bg-opacity-50 text-center p-2 rounded-b-xl">
        {name}
      </div>
    </div>
  );
};

export default MovieCard;
