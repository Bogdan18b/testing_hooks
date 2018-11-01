import React, { useState, useEffect } from 'react';
import {Button} from './styles';

const Jokes = () => {
  let [joke, setJoke] = useState("");
  let [change, setChange] = useState(false);
  useEffect(async () => {
    const result = await fetch("https://api.icndb.com/jokes/random");
    const res = await result.json();
    setJoke(res.value.joke);
  }, [change]);
  return (
    <div>
    <Button onClick={() => setChange(!change)}>Joke</Button>
    {joke ==="" ? null : <h3>{joke}</h3>}
    </div>
  );
};

export default Jokes;
