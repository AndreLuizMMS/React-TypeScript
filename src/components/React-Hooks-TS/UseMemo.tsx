import { SetStateAction, useEffect, useMemo, useState } from 'react';

const UseMemo = () => {
  const [random, setRandom] = useState<number>(0);

  function fib(n: number): number {
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
  }
  function generateNumber(): number {
    return Math.floor(Math.random() * 11);
  }

  function newNumber() {
    setRandom(generateNumber());
  }

  const result = useMemo<number>(() => fib(random), [random]);

  return (
    <div className="useMemo">
      <p>
        fibonacci {random} = {result}
      </p>
      <div className="spec">
        <button onClick={newNumber}> random number 0 - 10</button>
        <p className="comment"> // useMemo</p>
      </div>
    </div>
  );
};

export default UseMemo;
