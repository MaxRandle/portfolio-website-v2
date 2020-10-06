import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import Tile from "./Tile";
import { GameStateContext } from "../contexts/GameStateContext";
import { SizeContext } from "../contexts/SizeContext";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import Token from "./Token";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: theme.tile.large.size,
    height: theme.tile.large.size,
  },
  lastMove: {
    borderColor: "#00FF00",
    borderWidth: "2px",
  },
}));

const Square = (props) => {
  const { square, ...otherProps } = props;
  const { gameState } = useContext(GameStateContext);
  const { squareSize } = useContext(SizeContext);
  const classes = useStyles();

  return (
    <>
      {gameState.localVictories[square] !== false && (
        <Paper
          className={classes.paper}
          style={{ width: squareSize, height: squareSize }}
          classes={{ outlined: classes.lastMove }}
          variant={gameState.lastMove.square === square ? "outlined" : "elevation"}
        >
          <Token token={gameState.localVictories[square]} />
        </Paper>
      )}
      {gameState.localVictories[square] === false && (
        <Grid container direction="column" spacing={1} {...otherProps}>
          {[0, 3, 6].map((r) => (
            <Grid item key={r}>
              <Grid container spacing={1}>
                {[0, 1, 2].map((c) => (
                  <Grid item key={c}>
                    <Tile square={square} tile={r + c} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Square;

Square.propTypes = {
  square: PropTypes.number.isRequired,
};
