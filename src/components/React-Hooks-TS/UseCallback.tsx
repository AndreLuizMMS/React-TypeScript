import { useState, useCallback } from 'react';

const UseCallback = () => {
  const [count, setCount] = useState<number>(0);

  const increment = useCallback((): void => setCount(prev => prev + 1), []);
  const decrement = useCallback((): void => setCount(prev => prev - 1), []);

  return (
    <div className="UseCallback">
      <div className="count-box">{count}</div>
      <div className="spec">
        <button onClick={increment}>++</button>
        <button onClick={decrement}>--</button>
        <p className="comment">// UseCallback </p>
      </div>
    </div>
  );
};

export default UseCallback;
