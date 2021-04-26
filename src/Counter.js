import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(value => value + 1);
  const decrement = () => setCount(value => value - 1);

  return (
    <div>
      <div>Counter value: {count}</div>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Counter;
