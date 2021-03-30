import React, { useEffect, useRef, useState } from "react";
import { GridList, GridListTile, GridListTileBar } from "@material-ui/core";

const HobbyTile = (props) => {
  const { img, title, alt, size } = props;
  const [height, setHeight] = useState(0);
  const _ref = useRef(null);

  useEffect(() => {
    console.log(_ref.current.offsetWidth);
    // 3 square images fit into a row
    setHeight((4 / size) * _ref.current.offsetWidth);
  }, [size]);

  return (
    <GridList ref={_ref} cellHeight={height} cols={1}>
      <GridListTile rows={1} cols={1}>
        <img src={img} alt={alt} />
        <GridListTileBar title={title} />
      </GridListTile>
    </GridList>
  );
};

export default HobbyTile;
