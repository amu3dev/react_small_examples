import React, { useState } from "react";
import "./checker.css";

const Checker = () => {
  const valid = <p>Valid message</p>;
  const inValid = <p>Invalid message</p>;
  const [checker, setChecker] = useState("false");

  const handleInputChange = (event) => {
    console.log(event.target.value.length);
    event.target.value.trim().length < 3
      ? setChecker("false")
      : setChecker("true");
  };

  return (
    <form>
      <label>Your message</label>
      <input type="text" onChange={handleInputChange} />
      {checker === "false" ? inValid : valid}
    </form>
  );
};

export default Checker;
