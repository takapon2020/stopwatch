import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const timerStart = () => {
    return;
  };
  const timerStop = () => {
    return;
  };
  const timerRestart = () => {
    return;
  };
  const timerReset = () => {
    return;
  };

  return (
    <div className="App">
      <button onClick={timerStart}>start</button>
      <button onClick={timerStop}>stop</button>
      <button onClick={timerRestart}>restart</button>
      <button onClick={timerReset}>reset</button>
      <p>00:00:00</p>
    </div>
  );
}
