import React, { useEffect, useRef, useState } from "react";
import maxGuitarPic from "./media/max-guitar.jpg";
import dronePic from "./media/drone.jpg";
import maxPastaPic from "./media/max-pasta.jpg";
import rocketLeaguePic from "./media/rocket-league.jpg";
import chessPic from "./media/chess.jpg";
import beerPic from "./media/beer.jpg";
import lattePic from "./media/latte.jpg";
import { Grid } from "@material-ui/core";
import HobbyTile from "./HobbyTile";

const hobbies = [
  {
    src: maxGuitarPic,
    alt: "max with guitar",
    title: "Fingerstyle guitar",
    name: "guitar",
    sm: 6,
    xs: 12,
  },
  {
    src: rocketLeaguePic,
    alt: "rocket league",
    title: "Rocket League",
    name: "rl",
    sm: 6,
    xs: 12,
  },
  {
    src: chessPic,
    alt: "chess game",
    title: "Dubious chess",
    name: "chess",
    sm: 4,
    xs: 12,
  },
  {
    src: lattePic,
    alt: "latte art",
    title: "Latte art",
    name: "latte",
    sm: 4,
    xs: 12,
  },
  {
    src: maxPastaPic,
    alt: "homemade pasta",
    title: "Homemade pasta",
    name: "pasta",
    sm: 4,
    xs: 12,
  },
  {
    src: dronePic,
    alt: "racing drone",
    title: "Drone racing",
    name: "drone",
    sm: 6,
    xs: 12,
  },
  {
    src: beerPic,
    alt: "beer cans",
    title: "Craft beer",
    name: "beer",
    sm: 6,
    xs: 12,
  },
];

const Hobbies = (props) => {
  const { className, ...rest } = props;
  const _ref = useRef(0);

  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (containerWidth === 0) {
      setContainerWidth(_ref.current.offsetWidth);
    }
  }, []);

  return (
    <Grid container spacing={1} className={className} {...rest}>
      {hobbies.map((hobby) => {
        return (
          <Grid item key={hobby.title} sm={hobby.sm} xs={hobby.xs}>
            <HobbyTile img={hobby.src} title={hobby.title} alt={hobby.alt} size={hobby.sm} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Hobbies;
