import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function adjustCount(amount) {
    setCount(count + amount);
  }

  return (
    <>
      <button onClick={() => adjustCount(-1)}>-</button>
      <span>{count}</span>
      <button onClick={() => adjustCount(1)}>+</button>
    </>
  );
}

export default Counter;
