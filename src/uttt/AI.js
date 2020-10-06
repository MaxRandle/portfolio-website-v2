export const getRandomMove = (gameState) => {
  const legalMoves = getLegalMoves(gameState);
  const randomMove = legalMoves[Math.floor(Math.random() * legalMoves.length)];
  return randomMove;
};

export const getBoardEval = (gameState) => minimax(gameState, 6, -Infinity, +Infinity, gameState.turn);

export const getBestMove = (gameState) => {
  let depth = 6; // recommended 6
  const moves = getLegalMoves(gameState);
  if (moves.length > 2) {
    depth -= 1;
  }
  if (moves.length > 18) {
    depth -= 1;
  }
  // depth = 1; // delete this
  console.log(`Search depth: ${depth}`);
  const moveScores = moves.map((move) => ({
    ...move,
    score: minimax(getNextState(gameState, move), depth, -Infinity, +Infinity, -1),
    // score: staticEval(getNextState(gameState, move))
  }));

  const bestMove = moveScores.reduce((bestMove, currentMove) =>
    currentMove.score > bestMove.score ? currentMove : bestMove
  );

  // console.log(moveScores);
  console.log(`Best Move: Square: ${bestMove.square} Tile: ${bestMove.tile} Score: ${bestMove.score}`);
  return bestMove;
};

const minimax = (gameState, depth, alpha, beta, player) => {
  // exit condition
  if (depth === 0 || gameState.victory !== false) {
    // const ev = staticEval(gameState);
    // console.log(`lastMove = {square: ${gameState.lastMove.square}, tile: ${gameState.lastMove.tile}} score = ${ev}`);
    return staticEval(gameState);
  }

  //get all child gameStates
  const children = getLegalMoves(gameState).map((move) => getNextState(gameState, move));

  // if maximizing player
  if (player === 1) {
    let maxEval = -Infinity;
    children.every((child) => {
      const currentEval = minimax(child, depth - 1, alpha, beta, -1);
      maxEval = Math.max(maxEval, currentEval);
      alpha = Math.max(alpha, currentEval);
      if (beta <= alpha) {
        return false; // break
      }
      return true; // continue
    });
    return maxEval;
  }

  // if minimizing player
  else {
    let minEval = +Infinity;
    children.every((child) => {
      const currentEval = minimax(child, depth - 1, alpha, beta, 1);
      minEval = Math.min(minEval, currentEval);
      beta = Math.min(beta, currentEval);
      if (beta <= alpha) {
        return false; // break
      }
      return true; // continue
    });
    return minEval;
  }
};

const getLegalMoves = (gameState) => {
  // get an array of all legal moves in the given gameState
  let moves = [];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const move = { square: i, tile: j };
      if (isLegal(gameState, move)) {
        moves.push(move);
      }
    }
  }
  return moves;
};

const isLegal = (gameState, move) => {
  //check if move is legal in the given gameState
  const { square, tile } = move;
  return (
    gameState.victory === false && // is game not over
    gameState.board[square][tile] === false && // is tile unoccupied
    gameState.localVictories[square] === false && // is the square not won
    (gameState.lastMove.tile === square || // is the current square position equal to the last tile position played in
    gameState.lastMove.tile === false || // is this the first move of the game
      !gameState.localVictories[gameState.lastMove.tile] === false) // is the square in the position of the last tile played in won
  );
};

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

const getNextState = (gameState, move) => {
  const { square, tile } = move;
  //create a new object which we can mutate
  let nextState = JSON.parse(JSON.stringify(gameState));
  //update new board state with move
  nextState.board[square][tile] = nextState.turn;
  nextState.lastMove = { square, tile };
  nextState.turn = nextState.turn * -1;
  //check local victories
  nextState.localVictories[square] = checkVictory(nextState.board[square]);
  //check global victory
  nextState.victory = checkVictory(nextState.localVictories);
  return nextState;
};

export const staticEval = (gameState) => {
  // return a number indicating how advantageous the game is.

  // check if the game is won
  if (gameState.victory === 1) {
    return Infinity;
  } else if (gameState.victory === -1) {
    return -Infinity;
  } else if (gameState.victory === 0) {
    return 0;
  }

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // calculate the wieght of each square and the value of the large board
  // let squareWeights = [0.3, 0.2, 0.3, 0.2, 0.4, 0.2, 0.3, 0.2, 0.3];
  let squareWeights = [3, 2, 3, 2, 4, 2, 3, 2, 3];
  // let squareWeights = [1, 1, 1, 1, 1, 1, 1, 1, 1];
  // let squareWeights = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let largeBoardScore = 0;
  lines.forEach((line) => {
    const lineEval = evaluateLine(gameState.localVictories, line);
    squareWeights[line[0]] += Math.abs(lineEval);
    squareWeights[line[1]] += Math.abs(lineEval);
    squareWeights[line[2]] += Math.abs(lineEval);
    largeBoardScore += lineEval;
  });

  // calculate the values of each of the 9 squares
  let squareScores = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  gameState.board.forEach((square, i) => {
    if (gameState.localVictories[i] === false) {
      squareScores[i] = lines.reduce((squareScore, line) => squareScore + evaluateLine(square, line), 0);
    }
  });

  // weight given to large board.
  // the state of the large board should be valued more than the state of the small ones.
  const largeBoardWeight = 60;

  // console.log(squareWeights, largeBoardWeight);
  // console.log(squareScores, largeBoardScore);

  const weightedSquares = squareScores.map((square, idx) => square * squareWeights[idx]);
  const weightedLargeBoard = largeBoardScore * largeBoardWeight;
  // console.log(weightedSquares, weightedLargeBoard);

  const evaluation = weightedLargeBoard + weightedSquares.reduce((acc, cur) => acc + cur, 0);

  return evaluation;
};

const evaluateLine = (square, line) => {
  // returns 1 if player 1 has a winning possibility
  // returns -1 if player -1 has a winning possibiliy
  // returns 2 if player 1 has two tokens in the line
  // returns -2 if player -1 has two tokens in the line
  // otherwise returns 0

  let result = 0;
  line.every((tile) => {
    if (square[tile] === 0) {
      result = 0;
      return false;
    } else if (square[tile] === false) {
      return true;
    } else if (square[tile] * -1 === result) {
      result = 0;
      return false;
    } else {
      // result += square[tile]; // include how close a player is to winning a line
      result = square[tile]; // ignore how close a player is to winning a line
      return true;
    }
  });

  return result;
};
