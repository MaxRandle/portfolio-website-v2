import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  logo: {
    paddingRight: theme.spacing(2),
    width: "76px",
  },
}));

const ListItemLogo = ({ logo, className, alt, ...rest }) => {
  const classes = useStyles();

  return <img {...rest} className={clsx(classes.logo, className)} src={logo} alt={alt} />;
};

export default ListItemLogo;
