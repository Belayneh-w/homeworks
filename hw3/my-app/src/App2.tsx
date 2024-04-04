import React, { ChangeEvent } from "react";
import { useState } from "react";

// 2. Create a temperature converter component that allows users to enter a temperature in Celsius and converts it to Fahrenheit when a button is clicked. Use useState to manage the temperature input and output.
function App() {
  const [inputValue, setInputValue] = useState("");

  const HandlerInputBtnClick = () => {
    console.log(inputValue);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseFloat(e.target.value);
    setInputValue(((inputValue * 9) / 5 + 32).toString());
  };

  return (
    <div>
      <input onChange={handleChange} />
      <button onClick={HandlerInputBtnClick}>getInput</button>
    </div>
  );
}

export default App;
