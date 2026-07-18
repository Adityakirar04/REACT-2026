 import { useState } from "react";
import "./App.css";

const App = () => {
  const [num, setNum] = useState(0);

  function increaseNum() {
    setNum(num + 1);
  }

  function decreaseNum() {
    setNum(num - 1);
  }

  function jump5Num() {
    setNum(num + 5);
  }

  function resetNum() {
    setNum(0);
  }

  return (
    <div className="container">

      <div className="card">

        <h1>Counter App</h1>

        <div className="counter">
          {num}
        </div>

        <div className="buttons">

          <button className="green" onClick={increaseNum}>
            +1
          </button>

          <button className="red" onClick={decreaseNum}>
            -1
          </button>

          <button className="blue" onClick={jump5Num}>
            +5
          </button>

          <button className="gray" onClick={resetNum}>
            Reset
          </button>

        </div>

      </div>

    </div>
  );
};

export default App;