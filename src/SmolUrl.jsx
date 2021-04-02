import React from "react";
import { Container, Typography, Link } from "@material-ui/core";
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
  image: {
    width: "100%",
  },
}));

const SmolUrl = () => {
  const classes = useStyles();

  return (
    <Container
      disableGutters
      maxWidth="md"
      className={clsx(classes.flexColContainer)}
    >
      <Typography
        variant="h3"
        className={clsx(classes.flexColItem, classes.padSides)}
      >
        smol url
      </Typography>

      <Typography className={clsx(classes.flexColItem, classes.padSides)}>
        I was looking to dip my toes into full stack. I had searched around for
        some beginner friendly small fullstack project ideas and was inspired
        when I found sombody who had livestreamed his attempt to create a URL
        shortener from scratch in 30 minutes. I built my own version which by
        the way looks way nicer than his.
      </Typography>

      <Typography className={clsx(classes.flexColItem, classes.padSides)}>
        You can find the{" "}
        <Link
          target="_blank"
          color="inherit"
          underline="always"
          href="https://smolurl-url-shortener.herokuapp.com/"
        >
          live version here!
        </Link>{" "}
        It's very simplistic and intuitive so no instructions are required. It's
        hosted for free on Heroku so please allow 30s for the server to spin up.
        On the free hosting plan the server goes to sleep if there is no traffic
        for a few hours. Once it wakes up it should be fast and responsive.
      </Typography>

      <Typography className={clsx(classes.flexColItem, classes.padSides)}>
        Take a look as the source code on my github:{" "}
        <Link
          target="_blank"
          color="inherit"
          underline="always"
          href="https://github.com/MaxRandle/smol-url"
        >
          https://github.com/MaxRandle/smol-url
        </Link>{" "}
      </Typography>

      <Typography className={clsx(classes.flexColItem, classes.padSides)}>
        The front end uses React and Material-UI. The back end uses Node and
        Express with an nano-sized ORM called Monk to talk to the database. The
        database is MongoDB hosted on MongoDB Atlas.
      </Typography>
    </Container>
  );
};

export default SmolUrl;
