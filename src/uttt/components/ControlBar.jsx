import React, { useState, useContext, useEffect } from "react";
import { LinearProgress, Paper, Card, CardHeader } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { GameStateContext } from "../contexts/GameStateContext";
import { SizeContext } from "../contexts/SizeContext";
import { getBoardEval } from "../AI.js";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  flex: {
    flexGrow: "1",
  },
}));

const ControlBar = (props) => {
  const { className, ...otherProps } = props;
  const { gameState } = useContext(GameStateContext);
  const { squareSize } = useContext(SizeContext);
  const [loading, setLoading] = useState(true);
  const [evaluation, setEvaluation] = useState(0);
  const classes = useStyles();

  const evaluateBoard = (gs) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const ev = getBoardEval(gs);
        resolve(ev);
      }, 0);
    });
  };

  useEffect(() => {
    if (gameState.turn === -1) {
      const evaluateBoardAsync = async () => {
        try {
          setLoading(true);
          const ev = await evaluateBoard(gameState);
          setEvaluation(ev);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
      evaluateBoardAsync();
    }
  }, [gameState]);

  return (
    <Card className={clsx(className, classes.flex)} {...otherProps}>
      <CardHeader title={`Evaluation: ${evaluation}`} />
    </Card>
  );
};

export default ControlBar;
