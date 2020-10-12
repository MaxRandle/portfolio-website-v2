import React from "react";
import { Container, Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import simScreenshot from "./media/simScreenshot.jpg";

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

const P5JS = () => {
  const classes = useStyles();

  return (
    <Container disableGutters maxWidth="md" className={clsx(classes.flexColContainer)}>
      <Typography variant="h3" className={clsx(classes.flexColItem, classes.padSides)}>
        SpaceX I.S.S docking simulator autopilot script
      </Typography>

      <Typography className={clsx(classes.flexColItem, classes.padSides)}>
        On the 30<sup>th</sup> of May 2020 SpaceX launched mission Crew Dragon Demo-2, the first ever commercial manned
        space launch mission to the International Space Station. This mission involved the Dragon-2 capsule being
        launched from Cape Canaveral Air Force Station and then carried into low-Earth-orbit aboard the SpaceX Falcon-9
        rocket. Once the Dragon-2 crew capsule separated from the Falcon-9 upper stage the pilots used the reaction
        control thruster system to manouver within 20 metres of the I.S.S at which point Dragon-2 takes over and docks
        autonomously. To pique public interest in the mission, SpaceX published a free{" "}
        <Link
          color="inherit"
          underline="always"
          href="#"
          onClick={(event) => {
            event.preventDefault();
            window.open("https://iss-sim.spacex.com/");
          }}
        >
          online docking simulator
        </Link>{" "}
        for practicing manouvering and docking the Dragon-2 crew capsule using the reaction control thruster system. The
        simulator recreated the actual interface that the pilots used to control Dragon.
      </Typography>

      <img className={clsx(classes.flexColItem, classes.image)} src={simScreenshot} alt="simulator screenshot" />

      <Typography className={clsx(classes.flexColItem, classes.padSides)}>
        After playing around with this for a while, I decided to try to write a script that could autonomously dock.
        This was quite tricky because it meant I had to open up the website source and figure out which JS file the
        action was happening in. Then I had to read some minified code and try to figure out which variables were
        responsible for the numbers I was seeing on the screen such as displacement in 3 axes, pitch, roll, and yaw as
        well as translational and rotational velocities, the functions that controlled the velocoities, the magnitude of
        change in the velocity resulting from pressing one of the truster buttons, etc...
      </Typography>

      <Typography className={clsx(classes.flexColItem, classes.padSides)}>
        Eventually I had reverse engineered the code and came up with a simple algorithm that could safely and
        accurately dock using only the reaction control thrusters and not cheating by editing any code or variables
        directly. The algorithm attempted to match Dragon's velocity in all degrees of motion to an amount proportional
        to the displacement for each axis of motion.
      </Typography>

      <Typography className={clsx(classes.flexColItem, classes.padSides)}>
        I was pretty happy with what I had created but I wasn't quite done having fun with this project yet. What's the
        next logical step?
      </Typography>

      <Typography className={clsx(classes.flexColItem, classes.padSides)}>DO. IT. FASTER.</Typography>

      <Typography className={clsx(classes.flexColItem, classes.padSides)}>
        I devised a highly optimised algorithm based on simple harmonic motion, critical damping, and the spring
        equation that could dock insanely fast and put even the worlds best human docking speedrunners to absolute
        shame.
      </Typography>

      <Typography className={clsx(classes.flexColItem, classes.padSides)}>
        You can play around with my autopilot too! Simply go to{" "}
        <Link
          color="inherit"
          underline="always"
          href="#"
          onClick={(event) => {
            event.preventDefault();
            window.open("https://github.com/MaxRandle/spacex_iss_docking_simulator_script");
          }}
        >
          this github repository
        </Link>{" "}
        and follow the instructions in the README.md file.
      </Typography>
    </Container>
  );
};

export default P5JS;
