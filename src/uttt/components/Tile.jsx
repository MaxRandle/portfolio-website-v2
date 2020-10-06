import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { GameStateContext } from "../contexts/GameStateContext";
import { SizeContext } from "../contexts/SizeContext";
import Token from "./Token";

const useStyles = makeStyles((theme) => ({
  legal: {
    backgroundColor: theme.palette.secondary.main,
  },
  hover: {
    backgroundColor: theme.palette.secondary.light,
  },
  lastMove: {
    borderColor: "#00FF00",
    borderWidth: "2px",
  },
}));

const Tile = (props) => {
  const { tileSize } = useContext(SizeContext);
  const { square, tile, ...otherProps } = props;
  const { gameState, playMove } = useContext(GameStateContext);
  const [hover, setHover] = useState(false);
  const classes = useStyles();

  const isLegal = () => {
    return (
      gameState.victory === false &&
      gameState.turn === -1 && // AI
      gameState.board[square][tile] === false &&
      gameState.localVictories[square] === false &&
      (gameState.lastMove.tile === square ||
        gameState.lastMove.tile === false ||
        !gameState.localVictories[gameState.lastMove.tile] === false)
    );
  };

  const handleClick = () => {
    if (isLegal()) {
      playMove({
        square,
        tile,
      });
    }
  };

  return (
    <Paper
      className={`${isLegal() && classes.legal} ${isLegal() && hover && classes.hover}`}
      style={{ width: tileSize, height: tileSize }}
      classes={{ outlined: classes.lastMove }}
      {...otherProps}
      onClick={() => handleClick()}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      variant={gameState.lastMove.square === square && gameState.lastMove.tile === tile ? "outlined" : "elevation"}
    >
      <Token token={gameState.board[square][tile]} />
    </Paper>
  );
};

export default Tile;

Tile.propTypes = {
  square: PropTypes.number.isRequired,
  tile: PropTypes.number.isRequired,
};
