import React from "react";
import "./Button.css";

const Button = ({ startGame, playing }) => {
  return <button onClick={startGame}>{playing ? "Reset" : "Start"}</button>;
};

export default Button;
