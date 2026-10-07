import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <div className="counter-box">
        <h1>Counter App</h1>

        <h2>{count}</h2>

        <div className="buttons">
          <button onClick={decreaseCount}>-</button>
          <button onClick={resetCount}>Reset</button>
          <button onClick={increaseCount}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
