import React from "react";
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import maxPortrate from "./media/max-portrate.jpg";
import javascriptLogo from "./media/logos/javascript-logo.svg";
import reactLogo from "./media/logos/react-logo.svg";
import nodeLogo from "./media/logos/node-logo.svg";
import mongoLogo from "./media/logos/mongodb-logo.svg";
import uipathLogo from "./media/logos/uipath-logo.svg";
import pythonLogo from "./media/logos/python-logo.svg";
import awsLogo from "./media/logos/aws-block-logo.svg";
import dockerLogo from "./media/logos/docker-logo.svg";
import { Description, GitHub, LinkedIn } from "@material-ui/icons";
import SectionHeader from "./SectionHeader";
import { useHistory } from "react-router-dom";
import ListItemLogo from "./ListItemLogo";
import Hobbies from "./Hobbies";
import SkillListItem from "./SkillListItem";

const useStyles = makeStyles((theme) => ({
  flexColContainer: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(3, 0, 0, 0),
  },
  flexColItem: {
    margin: theme.spacing(0, 0, 3, 0),
  },
  padSides: {
    padding: theme.spacing(0, 2, 0, 2),
  },
  flexColItemSmallMargin: {
    margin: theme.spacing(0, 0, 1, 0),
  },
  portrate: {
    borderRadius: "50%",
    height: "400px",
  },
  center: {
    textAlign: "center",
  },
  sectionHeaderText: {
    padding: theme.spacing(0, 2, 0, 2),
  },
  listItemIcon: {
    marginRight: theme.spacing(1),
  },
  image: {
    width: "100%",
  },
  iconBorder: {
    border: "solid",
  },
}));

const skillData = [
  {
    logo: javascriptLogo,
    logoAltText: "JavaScript Logo",
    title: "JavaScript",
    body: "I have used JavaScript for front-end, back-end, automation, AI, and as a glorified calculator. The languages has many features that I love, such as the array methods map, filter, and reduce. Aditionally ES6 has lots of super useful and intuitive syntax which feels natural to use.",
  },
  {
    logo: reactLogo,
    logoAltText: "React Logo",
    title: "React.js",
    body: "React is my go-to for any front end web task. I love creating clean, agnostic, and reusable components. I have worked on projects that demonstrate a high degree of functionality and complex state management. I also utilise the material-ui component library because life is too short to make your own custom styled components for everything.",
  },
  {
    logo: nodeLogo,
    logoAltText: "Node Logo",
    title: "Node.js",
    body: "I have used NodeJS for many projects including such as building simple webservers and REST API's, and building CRUD controllers over a database. I have also become familiar with ExpressJS and MongoDB which when used together is a popular stack for building lightweight web applications.",
  },
  {
    logo: mongoLogo,
    logoAltText: "MongoDB Logo",
    title: "MongoDB",
    body: "MongoDB is an awesome lightweight database that is perfect small fullstack web apps. It also comes with free hosting in the form of MongoDB Atlas. I learned the basics of data modelling for non-relational databases while using MongoDB coupled with an ORM called Mongoose.",
  },
  {
    logo: awsLogo,
    logoAltText: "AWS Logo",
    title: "Amazon Web Services",
    body: "aws aws aws aws aws aws aws aws aws aws aws aws aws aws aws aws aws aws aws aws aws aws aws aws aws aws aws aws aws aws aws aws aws aws aws aws aws aws aws aws aws aws aws aws aws aws aws aws aws aws aws aws aws aws aws aws aws aws aws aws aws aws aws aws",
  },
  {
    logo: dockerLogo,
    logoAltText: "Docker Logo",
    title: "Docker",
    body: "docker docker docker docker docker docker docker docker docker docker docker docker docker docker docker docker docker docker docker docker docker docker docker docker docker docker docker docker docker docker docker docker docker docker docker docker docker docker docker docker docker docker docker docker docker ",
  },
  {
    logo: uipathLogo,
    logoAltText: "UiPath Logo",
    title: "UiPath",
    body: "UiPath is a software tool for robotic and intelligent automation. It is able to emulate a human performing almost any computer based task. It has utilities that allow machine learning and optical text and image recognition. The biggest limitations are tasks that require human judgement.",
  },
  {
    logo: pythonLogo,
    logoAltText: "Python Logo",
    title: "Python",
    body: "Python was taught primarily as the language of choice for the majority of my papers while studying computer science. Most assignments and projects were set in Python because it's a well rounded language which can be used for Object-Oriented or functional programming. Now days I have found success using python for data science and machine learning as a hobbyist.",
  },
];

const IntroPage = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Container
      disableGutters
      maxWidth="md"
      className={clsx(classes.flexColContainer)}
    >
      <Typography
        className={clsx(classes.flexColItem, classes.center)}
        color="inherit"
        variant="h1"
      >
        Max Randle
      </Typography>
      <Typography
        className={clsx(classes.flexColItem, classes.padSides, classes.center)}
      >
        Hi I'm Max, welcome to my portfolio! Here you can find out a little bit
        about me, download my current CV, and play around with some of my
        embedded projects. This website is built using React.js and hosted on
        AWS.
      </Typography>
      <Box className={clsx(classes.flexColItem, classes.center)}>
        <img
          className={clsx(classes.portrate)}
          src={maxPortrate}
          alt="max portrate"
        />
      </Box>

      <SectionHeader className={clsx(classes.flexColItemSmallMargin)}>
        External
      </SectionHeader>
      <List className={clsx(classes.flexColItemSmallMargin)}>
        <ListItem
          button
          onClick={() =>
            window.open(
              "http://max-randle-resume.s3-website-ap-southeast-2.amazonaws.com/"
            )
          }
        >
          <ListItemIcon className={clsx(classes.listItemIcon)}>
            <Description style={{ fontSize: 45 }} />
          </ListItemIcon>
          <ListItemText
            primary={<Typography variant="h5">Resume</Typography>}
          />
        </ListItem>

        <ListItem
          button
          onClick={() => window.open("https://github.com/MaxRandle")}
        >
          <ListItemIcon className={clsx(classes.listItemIcon)}>
            <GitHub style={{ fontSize: 45 }} />
          </ListItemIcon>
          <ListItemText
            primary={<Typography variant="h5">Github</Typography>}
          />
        </ListItem>

        <ListItem
          button
          onClick={() =>
            window.open("https://www.linkedin.com/in/max-randle-a79760160/")
          }
        >
          <ListItemIcon className={clsx(classes.listItemIcon)}>
            <LinkedIn style={{ fontSize: 45 }} />
          </ListItemIcon>
          <ListItemText
            primary={<Typography variant="h5">LinkedIn</Typography>}
          />
        </ListItem>
      </List>
      <SectionHeader className={clsx(classes.flexColItemSmallMargin)}>
        Projects
      </SectionHeader>
      <List className={clsx(classes.flexColItemSmallMargin)}>
        <ListItem button onClick={() => history.push("/p5js")}>
          <ListItemText
            primary={<Typography variant="h5">P5.js</Typography>}
            secondary={
              <Typography>
                Collection of small projects made using Processing for
                JavaScript
              </Typography>
            }
          />
        </ListItem>

        <ListItem button onClick={() => history.push("/uttt")}>
          <ListItemText
            primary={<Typography variant="h5">UTTT AI</Typography>}
            secondary={
              <Typography>
                An agent that can play the game of Ultimate-Tic-Tac-Toe
              </Typography>
            }
          />
        </ListItem>

        <ListItem button onClick={() => history.push("/iss")}>
          <ListItemText
            primary={
              <Typography variant="h5">I.S.S docking autopilot</Typography>
            }
            secondary={
              <Typography>
                Autopilot script for the SpaceX International Space Station
                docking simulator
              </Typography>
            }
          />
        </ListItem>

        <ListItem button onClick={() => history.push("/smolurl")}>
          <ListItemText
            primary={<Typography variant="h5">smol url</Typography>}
            secondary={
              <Typography>URL shortener built with MERN stack.</Typography>
            }
          />
        </ListItem>
      </List>

      <SectionHeader className={clsx(classes.flexColItemSmallMargin)}>
        Skills
      </SectionHeader>

      <List>
        {skillData.map((skill) => (
          <SkillListItem {...skill} />
        ))}
      </List>

      <SectionHeader className={clsx(classes.flexColItem)}>Work</SectionHeader>

      <Typography className={clsx(classes.flexColItem, classes.padSides)}>
        I am an intermediate level developer with experience in web development,
        automation, and business process reengineering. I am used to working
        directly with clients to document business processes and select the most
        suitable ones for digitisation. I then design a digital solution to
        improve the efficiency of the process, reengineer the existing process
        to incorporate the solution then build and deploy the solution either as
        a cloud service, or on-premise. These solutions can range from
        automating a task, writing bots that can be scheduled to perform
        overnight and deliver results my the next morning, or bots that can be
        run on demand to assist with a manual process. Frequently business
        processes cannot be digitised either because they involve data that is
        not machine readable such as unstructured and user generated data, or
        because they involve some human judgement calls to be made. For the
        issue of unstructured data, we can deploy a web form that can be used to
        collect data in a structured way where we can place validation rules on
        the data. When I'm not working with clients I am working on developing
        intellectual property creating semi-bespoke solutions which can then be
        sold later.
      </Typography>

      <SectionHeader className={clsx(classes.flexColItem)}>
        Hobbies
      </SectionHeader>

      <Typography className={clsx(classes.flexColItem, classes.padSides)}>
        Outside of work I like to spend time socialising, Sunday brunch with
        friends is always a hit. I like to spend my free time playing guitar,
        practicing latte art, watching rocket launches, playing Rocket League,
        making homemade pasta, and coding.
      </Typography>

      <Hobbies className={clsx(classes.flexColItem)} />
    </Container>
  );
};

export default IntroPage;
