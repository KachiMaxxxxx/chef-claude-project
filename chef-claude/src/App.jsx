import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  function handleMinus() {
    setCount((prevCount) => prevCount - 1);
  }
  function handlePlus() {
    setCount(function (prevCount) {
      return prevCount + 1;
    });
  }
  return (
    <main className="container">
      <h1 className="title">
        How many times will Bob say "State" in this comment section?
      </h1>
      <div className="counter">
        <button
          onClick={handleMinus}
          className="minus"
          aria-label="Decrease Count"
        >
          {" "}
          -{" "}
        </button>
        <h2 className="count"> {count}</h2>
        <button
          onClick={handlePlus}
          className="plus"
          aria-label="Increase Count"
        >
          {" "}
          +{" "}
        </button>
      </div>
    </main>
  );
}

