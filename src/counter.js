import React, { useState, useEffect } from 'react';

const Counter = () => {
  let [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count} seconds</h1>
      <button onClick={() => setCount(count+1)}>+</button>
      <button onClick={() => setCount(0)}>reset</button>

    </div>
  );
};

export default Counter;
