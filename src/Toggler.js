import React from "react";
import useToggle from "./hooks/useToggle";

function Toggler() {
  const [isHappy, toggleIsHappy] = useToggle(true);
  const [isHeartBroken, toggleIsHeartBroken] = useToggle(false);

  return (
    <div>
      <h1 onClick={toggleIsHappy}>{isHappy ? ":)" : ":("}</h1>
      <h1 onClick={toggleIsHeartBroken}>
        {isHeartBroken ? "Broken" : "In Love"}
      </h1>
    </div>
  );
}

export default Toggler;
