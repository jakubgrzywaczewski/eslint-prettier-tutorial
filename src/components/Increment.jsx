import React, { useEffect, useState } from 'react';

const DemoIncrement = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount((currentCount) => currentCount + 1);
  const handleDecrement = () => setCount((currentCount) => currentCount - 1);

  useEffect(() => setCount((currentCount) => currentCount + 1), []);

  return (
    <>
      <h1>{count}</h1>

      <button type="button" onClick={handleIncrement}>
        Increment
      </button>
      <button type="button" onClick={handleDecrement}>
        Decrement
      </button>
    </>
  );
};

export default DemoIncrement;
