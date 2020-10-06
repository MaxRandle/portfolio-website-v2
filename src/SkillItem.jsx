import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  flexRowContainer: {
    display: "flex",
    // justifyContent: "center",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  logoBox: {
    // width: "72px",
    // height: "72px",
    marginRight: theme.spacing(2),
  },
  logo: {
    // height: "60px",
    width: "60px",
    // maxHeight: "60px",
    // maxWidth: "60px",
  },
}));

const SkillItem = (props) => {
  const { logo, alt, children, className, ...rest } = props;
  const classes = useStyles();

  return (
    <Box className={clsx(classes.flexRowContainer, className)} {...rest}>
      <Box>
        <Box className={clsx(classes.logoBox, classes.flexRowContainer, classes.logoContainer)}>
          <img className={classes.logo} src={logo} alt={alt} />
        </Box>
      </Box>
      <Typography>{children}</Typography>
    </Box>
  );
};

export default SkillItem;
