import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  flexRowContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logoBox: {
    width: "96px",
    height: "96px",
  },
  logo: {
    height: "60px",
  },
}));

const SkillItem = (props) => {
  const { logo, alt, description, className, ...rest } = props;
  const classes = useStyles();

  return (
    <Box className={clsx(classes.flexRowContainer, className)} {...rest}>
      <Box>
        <Box className={clsx(classes.logoBox, classes.flexRowContainer, classes.logoContainer)}>
          <img className={classes.logo} src={logo} alt={alt} />
        </Box>
      </Box>
      <Typography>{description}</Typography>
    </Box>
  );
};

export default SkillItem;
