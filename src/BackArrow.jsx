import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { makeStyles } from "@material-ui/styles";
import { IconButton } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  cont: {
    flexGrow: "1",
    padding: theme.spacing(2, 2, 0, 2),
  },
  button: {
    border: "solid",
  },
}));

const BackArrow = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.cont}>
      <IconButton className={classes.button} onClick={() => window.history.back()}>
        <ArrowBackIcon />
      </IconButton>
    </div>
  );
};

export default BackArrow;
