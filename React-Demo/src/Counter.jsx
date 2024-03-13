import { useState } from "react";
import "./counter.css";

function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <div
        className="container"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        {number}
      </div>
      <button
        onClick={() => {
          setNumber(0);
        }}
      >
        Set To 0
      </button>
    </div>
  );
}

export default Counter;
