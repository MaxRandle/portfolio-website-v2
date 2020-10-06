import React from "react";
import { Grid, Box } from "@material-ui/core";
import Square from "./Square";
import { makeStyles } from "@material-ui/core/styles";
import ControlBar from "./ControlBar";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2, 0, 0, 0),
  },
  section: {
    marginBottom: theme.spacing(2),
  },
  center: {
    textAlign: "center",
  },
}));

const Board = (props) => {
  const { className, ...otherProps } = props;
  const classes = useStyles();

  return (
    <Box className={clsx(classes.container, className)} {...otherProps}>
      <ControlBar className={classes.section} />
      {[0, 3, 6].map((r) => (
        <Grid className={classes.section} justify="center" container spacing={4} key={r}>
          {[0, 1, 2].map((c) => (
            <Grid item key={c}>
              <Square square={r + c} />
            </Grid>
          ))}
        </Grid>
      ))}
    </Box>
  );
};

export default Board;
