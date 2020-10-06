import React, { createContext, useState, useEffect } from "react";

export const SizeContext = createContext();

const SizeContextProvider = (props) => {
  const getSize = () => {
    const width = window.innerWidth;
    // const tile =  < 475 ? 28 : 40;
    const tile = Math.min(40, width / 12);
    return { tile, square: tile * 3 + 8 };
  };
  const { tile, square } = getSize();

  const [tileSize, setTileSize] = useState(tile);
  const [squareSize, setSquareSize] = useState(square);

  useEffect(() => {
    const setSize = () => {
      const { tile, square } = getSize();
      console.log(window.innerWidth);
      setTileSize(tile);
      setSquareSize(square);
    };
    window.addEventListener("resize", setSize);

    return () => window.removeEventListener("resize", setSize); //cleanup function
  }, []);

  return <SizeContext.Provider value={{ tileSize, squareSize }}>{props.children}</SizeContext.Provider>;
};

export default SizeContextProvider;
