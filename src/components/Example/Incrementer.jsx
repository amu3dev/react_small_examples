import React, { useState } from "react";
import "./incrementer.css";
const Incrementer = () => {
  const handleIncrement = () => {
    // old way of setting state
    // numCounter = numCounter + 1;
    //setNumCounter(numCounter)
    // best practice to use the function form of set state
    setNumCounter((numCounter) => {
      return numCounter + 1;
    });
  };

  const [numCounter, setNumCounter] = useState(0);
  return (
    <div>
      <p id="counter">{numCounter}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default Incrementer;
