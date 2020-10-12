import React from "react";
import maxGuitarPic from "./media/max-guitar.jpg";
import dronePic from "./media/drone.jpg";
import maxPastaPic from "./media/max-pasta.jpg";
import rocketLeaguePic from "./media/rocket-league.jpg";
import chessPic from "./media/chess.jpg";
import beerPic from "./media/beer.jpg";
import lattePic from "./media/latte.jpg";
import { Grid, GridList, GridListTile, GridListTileBar } from "@material-ui/core";

const hobbies = [
  {
    src: maxGuitarPic,
    alt: "max with guitar",
    title: "Fingerstyle guitar",
    name: "guitar",
    rows: 3,
    cols: 6,
    sm: 6,
    xs: 12,
    height: 320,
  },
  {
    src: rocketLeaguePic,
    alt: "rocket league",
    title: "Rocket League",
    name: "rl",
    rows: 3,
    cols: 6,
    sm: 6,
    xs: 12,
    height: 320,
  },
  {
    src: dronePic,
    alt: "racing drone",
    title: "Drone racing",
    name: "drone",
    rows: 3,
    cols: 5,
    sm: 6,
    xs: 12,
    height: 320,
  },
  {
    src: beerPic,
    alt: "beer cans",
    title: "Craft beer",
    name: "beer",
    rows: 3,
    cols: 7,
    sm: 6,
    xs: 12,
    height: 320,
  },
  {
    src: chessPic,
    alt: "chess game",
    title: "Dubious chess",
    name: "chess",
    rows: 4,
    cols: 4,
    sm: 4,
    xs: 12,
    height: 320,
  },
  {
    src: lattePic,
    alt: "latte art",
    title: "Latte art",
    name: "latte",
    rows: 4,
    cols: 4,
    sm: 4,
    xs: 12,
    height: 320,
  },
  {
    src: maxPastaPic,
    alt: "homemade pasta",
    title: "Homemade pasta",
    name: "pasta",
    rows: 4,
    cols: 4,
    sm: 4,
    xs: 12,
    height: 320,
  },
];

const Hobbies = (props) => {
  const { className, ...rest } = props;

  return (
    // <GridList className={className} cellHeight={80} cols={12} {...rest}>
    //   {hobbies.map((hobby) => {
    //     return (
    //       <GridListTile key={hobby.title} rows={hobby.rows} cols={hobby.cols}>
    //         <img src={hobby.src} alt={hobby.alt}  />
    //         <GridListTileBar title={hobby.title} />
    //       </GridListTile>
    //     );
    //   })}
    // </GridList>

    // <div className={clsx(className, "grid-container")} {...rest}>
    //   {hobbies.map((hobby) => {
    //     const { src, alt, ...restImg } = hobby.img;
    //     return <img key={hobby.title} src={src} alt={alt} {...restImg} />;
    //   })}
    // </div>

    <Grid container spacing={1}>
      {hobbies.map((hobby) => {
        return (
          <Grid item key={hobby.title} sm={hobby.sm} xs={hobby.xs}>
            <GridList className={className} cellHeight={hobby.height} cols={1}>
              <GridListTile rows={1} cols={1}>
                <img src={hobby.src} alt={hobby.alt} />
                <GridListTileBar title={hobby.title} />
              </GridListTile>
            </GridList>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Hobbies;
