import React, { createContext, useState } from "react";
import { getBestMove } from "../AI";
import { useEffect } from "react";

export const GameStateContext = createContext();

const GameStateContextProvider = (props) => {
  const [gameState, setGameState] = useState({
    board: new Array(9).fill(new Array(9).fill(false)).map((x) => x.slice(0)),
    localVictories: new Array(9).fill(false),
    lastMove: {
      square: false,
      tile: false,
    },
    turn: -1,
    victory: false,
  });

  const playMove = (move) => {
    const { square, tile } = move;
    //create a new arrect which we can mutate
    let newGame = JSON.parse(JSON.stringify(gameState));
    //update new board state with move
    newGame.board[square][tile] = newGame.turn;
    newGame.lastMove = { square, tile };
    newGame.turn = newGame.turn * -1;
    //check local victories
    newGame.localVictories[square] = checkVictory(newGame.board[square]);
    //check global victory
    newGame.victory = checkVictory(newGame.localVictories);
    setGameState(newGame);
  };

  useEffect(() => {
    if (gameState.victory === false && gameState.turn === 1) {
      setTimeout(() => playMove(getBestMove(gameState)), 0); // ai plays a move
    }
  }, [gameState]);

  return (
    <GameStateContext.Provider value={{ gameState, playMove, setGameState }}>
      {props.children}
    </GameStateContext.Provider>
  );
};

export default GameStateContextProvider;

const checkVictory = (arr) => {
  let vicArray = [
    arr[0] + arr[1] + arr[2],
    arr[3] + arr[4] + arr[5],
    arr[6] + arr[7] + arr[8],
    arr[0] + arr[3] + arr[6],
    arr[1] + arr[4] + arr[7],
    arr[2] + arr[5] + arr[8],
    arr[0] + arr[4] + arr[8],
    arr[2] + arr[4] + arr[6],
  ];
  if (Math.max(...vicArray) === 3) {
    return 1;
  } else if (Math.min(...vicArray) === -3) {
    return -1;
  } else if (!arr.includes(false)) {
    return 0;
  } else {
    return false;
  }
};
