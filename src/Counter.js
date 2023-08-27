import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function adjustCount(amount) {
    // If I need to perform this twice, it wouldn't work
    // React groups them together and performs them at the same time
    // 0 + 1
    // setCount(count + amount);
    // 0 + 1
    // setCount(count + amount);

    // If using the previous value, always use the function version
    setCount((prevCount) => prevCount + amount);
    setCount((prevCount) => prevCount + amount);
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
