import { useState } from "react";

// 1. Create a simple React component called Counter that displays a counter value initialized to 0. Include two buttons: one for incrementing the counter and another for decrementing it. Use useState to manage the counter state.

function App() {
  let [count, setCount] = useState<number>(() => {
    console.log("run function");
    return 0;
  });
  const clickHandlerInc = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const clickHandlerDec = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <div className="App">
      <button onClick={clickHandlerInc}>+</button>
      <span>{count}</span>
      <button onClick={clickHandlerDec}>-</button>
    </div>
  );
}

export default App;
