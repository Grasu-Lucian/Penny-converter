import React, { useState } from "react";
import { useReducer } from "react";
import "./App.scss";

function reducer(state, { input }) {
  let quarters = 0,
    dimes = 0,
    nickels = 0,
    total = 0,
    pennies = 0;

  input = input * 100;

  while (Math.floor(input / 25) > 0) {
    quarters = quarters + 1;
    input = input - 25;
  }
  while (Math.floor(input / 10) > 0) {
    dimes = dimes + 1;
    input = input - 10;
  }
  while (Math.floor(input / 5) > 0) {
    nickels = nickels + 1;
    input = input - 5;
  }
  while (Math.floor(input / 1) > 0) {
    pennies = pennies + 1;
    input = input - 1;
  }
  total = quarters + dimes + nickels + pennies;
  return {
    ...state,
    Quarters: quarters,
    Dimes: dimes,
    Nickels: nickels,
    Pennies: pennies,
    Total: total,
  };
}
function App() {
  const [input, setInput] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    Quarters: 0,
    Dimes: 0,
    Nickels: 0,
    Pennies: 0,
    Total: 0,
  });
  return (
    <div className="App">
      <div className="title">
        <div className="converter"> Converter App</div>
        <div className="subtitle">Enter your amount of dollars</div>
        <form>
          <div className="submit-place">
            <input
              className="holder"
              type="number"
              value={input}
              onInput={(e) => {
                setInput(e.target.value);
              }}
            />
            <button
              type="button"
              onClick={() => {
                console.log(dispatch({ input: input }));
              }}
            >
              Convert
            </button>
          </div>
        </form>
        <div className="total">
          {state.Total}¢ :Total
          <div className="Quarters">{state.Quarters}¢ :Quarters</div>
          <div className="Dimes">{state.Dimes}¢ :Dimes</div>
          <div className="Nickels">{state.Nickels}¢ :Nickels</div>
          <div className="Pennies">{state.Pennies}¢ :Pennies</div>
        </div>
      </div>
    </div>
  );
}

export default App;
