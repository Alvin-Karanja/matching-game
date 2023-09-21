import React from "react";
import "./TileSelector.css";
import useHover from "../../hooks"; // Import useHover
import GameContext from "../../GameContext.js"; // Import GameContext

function TileSelector() {
  // Wrap the dropdown const and the return statement in an anonymous function that takes the destructured object parameters numTiles and handleNumTileChange
  return (
    <GameContext.Consumer>
      {({ numTiles, handleNumTileChange }) => (
        <div className="tileSelector">
          <div>Number of Tiles</div>
          <div className="tileSelectorDropdown" ref={useHover()[0]}>
            {numTiles}
            {/* Add an onClick attribute to each of the <div>'s with a class name of 'number' and pass to it an anonymous function that calls the handleNumTileChange() function from props, adding the number that's rendered in each of the <div>s to its respective call of handleNumTileChange() */}
            <div className="number" onClick={() => handleNumTileChange(4)}>
              4
            </div>
            <div className="number" onClick={() => handleNumTileChange(16)}>
              16
            </div>
            <div className="number" onClick={() => handleNumTileChange(36)}>
              36
            </div>
          </div>
        </div>
      )}
    </GameContext.Consumer>
  );
}

export default TileSelector;
