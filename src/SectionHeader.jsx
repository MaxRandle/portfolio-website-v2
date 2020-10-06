import React from "react";
import { Box, Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  sectionHeader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  sectionHeaderDivider: {
    flexGrow: "1",
  },
  sectionHeaderText: {
    padding: theme.spacing(0, 2, 0, 2),
  },
}));

const SectionHeader = (props) => {
  const { className, children, ...rest } = props;
  const classes = useStyles();
  return (
    <Box className={clsx(className, classes.sectionHeader)} {...rest}>
      <Divider className={classes.sectionHeaderDivider} />
      <Typography className={classes.sectionHeaderText} variant="h3">
        {children}
      </Typography>
      <Divider className={classes.sectionHeaderDivider} />
    </Box>
  );
};

export default SectionHeader;
