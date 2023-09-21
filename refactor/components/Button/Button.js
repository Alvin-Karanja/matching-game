import React from "react";
import GameContext from "../../GameContext.js";
import "./Button.css";

const Button = () => {
  // Wrap the existing <button /> in an anonymous function that takes the destructured object parameters playing and startGame and returns the <button/>
  return (
    <GameContext.Consumer>
      {({ playing, startGame }) => (
        <button onClick={startGame}>{playing ? "Reset" : "Start"}</button>
      )}
    </GameContext.Consumer>
  );
};

export default Button;
