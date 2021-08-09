import React, { useState }from "react";

function Toggle() {
  const [toggler, setToggle] = useState(false)
  function toggleHandler () {
    setToggle(!toggler)
  }
  const color = toggler? "green" : "red";

  return <button style = {{background: color}} onClick={toggleHandler}>{toggler ? "ON" : "OFF"}</button>;
}

export default Toggle;
