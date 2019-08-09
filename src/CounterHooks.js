import React, { useState } from "react";

const CounterHooks = () => {
  //useState is a function that returns an array of
   //1. The piece of state
   //2. function to update that piece of state

  //pass initial state to useState function as a param
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>The count is: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add 1</button>
    </div>
  )
}

export default CounterHooks;
