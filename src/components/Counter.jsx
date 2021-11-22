import { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0); // const number = 0 와 동일 ( number, 0 의미 )

  //   const number = useState(0)[0];
  //   const setNumber = useState(0)[1];
  //   const useState = (default) => {
  //       const state = default;
  //       const setState = () => {}

  //   }
  //   let number = 0;

  const handleClick = () => {
    // number = number + 1;
    setNumber(number + 1);
    console.log(number);
  };
  return (
    <div style={{ padding: 50 }}>
      <h1>{number}</h1>
      <button onClick={handleClick}>+ 1</button>
    </div>
  );
};

export default Counter;
