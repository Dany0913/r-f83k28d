import React, { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const handleCounter = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <span className="value">{counter}</span>
      <button id="inc" onClick={handleCounter}>
        Incrementa
      </button>
    </div>
  );
}

export default App;
