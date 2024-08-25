import React from "react";

const Banner = () => {
  return (
    <div
      className="h-[20vh] md:h-[75vh] bg-center bg-cover flex items-end"
      style={{
        backgroundImage: `url(https://i.pinimg.com/originals/40/7a/b2/407ab25041dd7ac3a986cf007d2c0c21.jpg)`,
      }}
    >
        <div className="text-white text-2xl text-center w-full bg-gray-900/60 p-4">Avengers Endgame</div>
    </div>
  );
};

export default Banner;
