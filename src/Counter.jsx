import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <div>
        <h1>{count}</h1>
        <div>
          <button onClick={handleIncrement} className="btn btn-suc">
            Increment
          </button>
          <button onClick={handleDecrement} className="btn btn-dan">
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}
export default Counter;
