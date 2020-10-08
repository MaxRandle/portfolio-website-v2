import React from "react";
import { Container, Card, CardHeader, CardContent, Divider, Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  flexColContainer: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(3, 0, 0, 0),
  },
  flexColItem: {
    margin: theme.spacing(0, 0, 3, 0),
  },
  flexColItemSmallMargin: {
    margin: theme.spacing(0, 0, 1, 0),
  },
  padSides: {
    padding: theme.spacing(0, 2, 0, 2),
  },
  center: {
    textAlign: "center",
  },
  iframe: {
    width: "100%",
    height: "500px",
  },
}));

const P5JS = () => {
  const classes = useStyles();

  return (
    <Container disableGutters maxWidth="md" className={clsx(classes.flexColContainer)}>
      <Typography variant="h3" className={clsx(classes.flexColItem, classes.padSides)}>
        P5.js
      </Typography>

      <Typography className={clsx(classes.flexColItem, classes.padSides)}>
        Some of my first ever JavaScript projects, built while I was still studying. These projects were built using the
        P5.js library and following tutorials by{" "}
        <Link
          color="inherit"
          underline="always"
          href="#"
          onClick={(event) => {
            event.preventDefault();
            window.open("https://www.youtube.com/user/shiffman");
          }}
        >
          Coding Train - Daniel Shiffman
        </Link>
      </Typography>

      <Card className={classes.flexColItem}>
        <CardHeader title="Rain" />
        <CardContent className={classes.center}>
          <iframe className={classes.iframe} title="Rain" src="https://editor.p5js.org/MaxRandle/embed/_xTtmD_Wx" />
        </CardContent>
        <Divider />
        <CardContent>
          <Typography>
            This was one of the first projects I ever undertook using JavaScript. It helped to develop my understanding
            of how the language feels and functions as a pure programming language. Using the P5.js library I was able
            to build creative and visual projects without having knowlege of how to use JavaScript to manipulate the
            DOM.
          </Typography>
        </CardContent>
      </Card>

      <Card className={classes.flexColItem}>
        <CardHeader title="Maze" />
        <CardContent className={classes.center}>
          <iframe className={classes.iframe} title="Maze" src="https://editor.p5js.org/MaxRandle/embed/oRiUyH7mG" />
        </CardContent>
        <Divider />
        <CardContent>
          <Typography>
            This project was the start of what would later become an obsession with visualising algorithms. This program
            creates a solvable maze by treating the grid as a graph and performing a Depth-First-Search. I like this
            project for its simplicity and it shows clearly how the algorithm works.
          </Typography>
        </CardContent>
      </Card>

      <Card className={classes.flexColItem}>
        <CardHeader title="Fawkes" />
        <CardContent className={classes.center}>
          <iframe className={classes.iframe} title="Fawkes" src="https://editor.p5js.org/MaxRandle/embed/c2_q18g76" />
        </CardContent>
        <Divider />
        <CardContent>
          <Typography>
            In this project I experimented with user interaction by listening for mouse events. It also involves the use
            physics engine programming. Constant acceleration due to gravity is implemented here and simple kinematics
            are used to calculate the initial velocity of the shell so that the maximum height achieved by the shell
            perfectly reaches the point where the mouse was clicked before exploding.
          </Typography>
        </CardContent>
      </Card>

      <Card className={classes.flexColItem}>
        <CardHeader title="Warp" />
        <CardContent className={classes.center}>
          <iframe className={classes.iframe} title="Warp" src="https://editor.p5js.org/MaxRandle/embed/Qejijupwg" />
        </CardContent>
        <Divider />
        <CardContent>
          <Typography>
            My personal favourite P5.js project. This project works by adjusting object speed and size to emulate a
            z-axis and paralax.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default P5JS;
