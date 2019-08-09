import React from "react";
import CounterHooks from "./CounterHooks";
import Toggler from "./Toggler";
import "./App.css";
import FormHooks from "./FormHooks";
import InputHook from "./InputHook";
import SWmovies from "./SWmovies";

function App() {
  return (
    <div className="App">
      <CounterHooks />
      <Toggler />
      <FormHooks />
      <InputHook />
      <SWmovies />
    </div>
  );
}

export default App;
