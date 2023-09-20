import React, { Component } from "react";
import OptionsPanel from "../components/OptionsPanel";
import Board from "../components/Board";

import "./App.css";
import { createTiles } from "../../misc/utils";

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
    return (
      <div className="App">
        <header className="App-header">Turbo-Matcher</header>
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
      </div>
    );
  }

  handleTileClicked(id, color) {
    // TODO: Implement the handleTileClicked() method
  }

  startGame(numTiles) {
    this.setState(() => ({
      playing: true,
      previousTileIndex: null,
      toBeCleared: null,
      tiles: createTiles(numTiles),
    }));
  }
}

export default App;
