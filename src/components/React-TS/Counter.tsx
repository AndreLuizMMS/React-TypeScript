import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState<number | string>(1);
  const [prevValue, setPrevValue] = useState<number | string>(count);

  const isNumSum = () => {
    if (typeof count == 'number') {
      setCount(count + 1);
    } else {
      setCount(prevValue);
    }
  };
  const isNumSub = () => {
    if (typeof count == 'number') {
      setCount(count - 1);
    } else {
      setCount(prevValue);
    }
  };
  const newString = () => {
    const words = [
      'apple',
      'banana',
      'orange',
      'pear',
      'grape',
      'pineapple',
      'watermelon',
      'kiwi',
      'mango',
      'peach'
    ];
    const randomIndex = Math.floor(Math.random() * words.length);
    setCount(words[randomIndex]);
  };

  return (
    <>
      <br />
      <div className="count-box">
        <div className="count">{count}</div>
      </div>
      <br />
      <button
        onClick={() => {
          if (typeof count == 'number') setPrevValue(count);
          newString();
        }}
      >
        Fruit
      </button>
      <br />
      <br />

      <div className="arit">
        <button
          onClick={() => {
            isNumSum();
          }}
        >
          number + 1
        </button>
        <br />
        <button
          onClick={() => {
            isNumSub();
          }}
        >
          number - 1
        </button>
        <br />
        <br />
      </div>
    </>
  );
};
