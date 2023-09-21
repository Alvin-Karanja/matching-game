import React from "react";
import "./Tile.css";

const Tile = ({ selected, matched, color, svg, handleTileClicked }) => {
  const dynamicColor = selected || matched ? { backgroundColor: color } : null;

  return (
    <div
      className="Tile"
      style={dynamicColor}
      onClick={() => handleTileClicked(props.id, props.color)}
    >
      {selected || matched ? <svg>{svg}</svg> : null}
    </div>
  );
};

export default Tile;
