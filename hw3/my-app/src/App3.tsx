// import React, { ChangeEvent } from "react";
import { useState } from "react";

// 3. Build a component that generates a random number between 1 and 100 when a button is clicked. Display the generated number using useState.
function App() {
  let [count, setCount] = useState<number>(1);
  const clickHandler = () => {
    setCount(Math.floor(Math.random() * 100) + 1);
  };

  return (
    <div className="App">
      {count} <br />
      <button onClick={clickHandler}>Click Me</button>
    </div>
  );
}

export default App;
