import React, { Component } from "react";
import GameContext from "../../GameContext.js";
import OptionsPanel from "../components/OptionsPanel";
import Board from "../components/Board";

import "./App.css";
import { createTiles, indexOfSelected } from "../../misc/utils";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numTiles: 36,
      playing: false,
      previousTileIndex: null,
      tiles: [],
      toBeCleared: null,
    };
  }

  render() {
    // Wrap the <OptionsPanel/> and <Board /> components in an instantiation of the <GameContext.Provider /> component, adding a prop called value to the <GameContext.Provider > whose value should be the whole state object
    return (
      <div className="App">
        <header className="App-header">Turbo-Matcher</header>
        <GameContext.Provider value={this.state}>
          <OptionsPanel
            playing={this.state.playing}
            numTiles={this.state.numTiles}
            startGame={this.startGame}
          />
          <Board
            numTiles={this.state.numTiles}
            tiles={this.state.tiles}
            handleTileClicked={this.handleTileClicked}
          />
        </GameContext.Provider>
      </div>
    );
  }

  handleTileClicked(id, color) {
    this.setState((state) => {
      const tiles = state.tiles;
      const toBeCleared = tiles[id];
      const selectedTileIndex = indexOfSelected(tiles, id, color);
      const previousTileIndex = state.previousTileIndex;

      // If there are tiles to be cleared, clear them.
      if (toBeCleared !== null) {
        tiles[toBeCleared[0]].selected = false;
        tiles[toBeCleared[1]].selected = false;
        toBeCleared = null;
      }

      // If there is a previous tile index, check if it matches the current tile.
      if (previousTileIndex !== null) {
        const previousTile = tiles[previousTileIndex];
        const selectedTile = tiles[selectedTileIndex];

        if (
          previousTile.id !== selectedTile.id &&
          previousTile.color === color
        ) {
          selectedTile.matched = true;
          previousTile.matched = true;
          previousTileIndex = null;
        } else {
          toBeCleared = [previousTileIndex, selectedTileIndex];
          previousTileIndex = null;
        }
      }

      // Set the selected property of the current tile to true.
      tiles[selectedTileIndex].selected = true;

      return {
        toBeCleared,
        tiles,
        previousTileIndex,
      };
    });
  }

  startGame(numTiles) {
    this.setState(() => ({
      playing: true,
      previousTileIndex: null,
      toBeCleared: null,
      tiles: createTiles(numTiles, this.handleTileClicked), // Pass this.handleTileClicked as an argument
    }));
  }

  // Add a new method called handleNumTileChange()
  handleNumTileChange(num) {
    this.setState(() => ({
      numTiles: num,
      playing: false,
      tiles: [],
    }));
  }
}

export default App;
