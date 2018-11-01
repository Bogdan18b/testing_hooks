import React, { useState } from 'react';
import {Button} from './styles';

const Counter = () => {
  let [count, setCount] = useState(0);
  let [firstName, setFirstName] = useState("Harry");
  let [lastName, setLastName] = useState("Poppins");
  // let [name, setName] = useState({
  //   first: "Harry",
  //   last: "Poppins"
  // });
  return (
    <div>
      <Button onClick={() => setCount(count+1)}>+</Button>
      <Button onClick={() => setCount(0)}>reset</Button>
      <h1>{firstName + " " + lastName} clicked {count} times.</h1>
      <input value={firstName} onChange={e => setFirstName(e.target.value)}/>
      <input value={lastName} onChange={e => setLastName(e.target.value)}/>
    </div>
  );
};

export default Counter;
