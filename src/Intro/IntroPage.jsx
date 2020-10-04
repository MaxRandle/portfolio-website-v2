import React from "react";
import { Box, Container, Divider, Typography } from "@material-ui/core";
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
    padding: theme.spacing(3, 0, 0, 0),
  },
  flexColItem: {
    margin: theme.spacing(0, 0, 3, 0),
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

      <SkillItem className={clsx(classes.flexColItem)} logo={javascriptLogo} alt={"JavaScript logo"}>
        I have used JavaScript for front-end, back-end, automation, AI, and as a glorified calculator. The languages has
        many features that I love, such as the array methods map, filter, and reduce. ES6 has many super useful features
        which I love and feel natural to use.
      </SkillItem>

      <SkillItem className={clsx(classes.flexColItem)} logo={reactLogo} alt={"React logo"}>
        React is my go-to for any front end web task. I love creating clean, agnostic, and reusable components. I also
        utilize the material-ui component library because life is too short to make your own custom styled components
        for everything.
      </SkillItem>

      <SkillItem className={clsx(classes.flexColItem)} logo={nodeLogo} alt={"Node logo"}>
        I have used NodeJS for many projects including such as building simple webservers and REST API's, and building
        CRUD controllers over a database. I have also become familiar with ExpressJS and MongoDB which when used
        together is a popular stack for building lightweight web applications.
      </SkillItem>

      <SkillItem className={clsx(classes.flexColItem)} logo={uipathLogo} alt={"UiPath logo"}>
        UiPath is a software tool for robotic and intelligent automation. It is able to emulate a human performing
        almost any computer based task. It has utilities that allow machine learning and optical text and image
        recognition. The biggest limitations are tasks that require human judgement.
      </SkillItem>

      <SkillItem className={clsx(classes.flexColItem)} logo={pythonLogo} alt={"Python logo"}>
        Python was taught primarily as the language of choice for the majority of my papers while studying computer
        science. Most assignments and projects were set in Python because it's a well rounded language which can be used
        for O.O. or functional programming. Now days I have found success using python for data science and machine
        learning as a hobbyist.
      </SkillItem>
    </Container>
  );
};

export default IntroPage;
