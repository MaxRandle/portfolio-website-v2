import React from "react";
import { Box, Container, Divider, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import maxPortrate from "../media/max-portrate.jpg";
import javascriptLogo from "../media/logos/javascript-logo.svg";
import reactLogo from "../media/logos/react-logo.svg";
import nodeLogo from "../media/logos/node-logo.svg";
import pythonLogo from "../media/logos/python-logo.svg";
import uipathLogo from "../media/logos/uipath-logo.svg";
import SkillItem from "./SkillItem";

const useStyles = makeStyles((theme) => ({
  flexColContainer: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2, 0, 0, 0),
  },
  flexColItem: {
    margin: theme.spacing(0, 0, 2, 0),
  },
  portrate: {
    borderRadius: "50%",
    height: "400px",
  },
  center: {
    textAlign: "center",
  },
}));

const IntroPage = () => {
  const classes = useStyles();

  return (
    <Container disableGutters maxWidth="sm" className={clsx(classes.flexColContainer)}>
      <Typography className={clsx(classes.flexColItem, classes.center)} color="inherit" variant="h1">
        Max Randle
      </Typography>

      <Typography className={clsx(classes.flexColItem, classes.center)}>
        Hi, I'm max, welcome to my portfolio! Here you can find my some of my embedded projects to play around with.
        This website is built using react and hosted on AWS.
      </Typography>

      <Box className={clsx(classes.flexColItem, classes.center)}>
        <img className={clsx(classes.portrate)} src={maxPortrate} alt="max portrate" />
      </Box>

      <Divider className={clsx(classes.flexColItem)} />

      <Typography className={clsx(classes.flexColItem, classes.center)} color="inherit" variant="h3">
        Skills
      </Typography>

      <SkillItem
        className={clsx(classes.flexColItem)}
        logo={javascriptLogo}
        alt={"JavaScript logo"}
        description="I have used JavaScript for front-end, back-end, automation, AI, and as a glorified calculator. The languages
          has many features that I love, such as the array methods map, filter, and reduce. ES6 has many super useful
          features which I love and feel natural to use."
      />

      <SkillItem
        className={clsx(classes.flexColItem)}
        logo={reactLogo}
        alt={"React logo"}
        description="React is my go-to for any front end web task. I love creating clean, agnostic, and reusable components."
      />

      <SkillItem
        className={clsx(classes.flexColItem)}
        logo={nodeLogo}
        alt={"Node logo"}
        description="React is my go-to for any front end web task. I love creating clean, agnostic, and reusable components."
      />
    </Container>
  );
};

export default IntroPage;
