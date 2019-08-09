import React, { useState, useEffect } from "react";
import axios from "axios";

const SWmovies = () => {
  const [number, setNumber] = useState(1);
  const [movie, setMovie] = useState("");

  useEffect(() => {
    //anytime, we're using async/promise function inside of useEffect, we must
    //create a new async function
    //and call it inside useEffect
    async function getData() {
      const response = await axios.get(`https://swapi.co/api/films/${number}/`);
      setMovie(response.data);
    }

    getData();
  }, [number]);
  //passing in the second argument in useEffect
  //so that useEffect only renders when the state "number" is updated

  return (
    <div>
      <h1>Pick a movie</h1>
      <h4>{movie.title}</h4>
      <select value={number} onChange={e => setNumber(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
      </select>
    </div>
  );
};

export default SWmovies;
