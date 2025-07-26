import { useState } from "react";

export function TodoInput(props) {
  const { handleAddTodo } = props;
  const [inputValue, setInputValue] = useState("");
  // inputValue = stores the current text inside the inputField
  // a function used to update inputValue
  // useState initializes inputValye as an empty string

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Add task"
        value={inputValue} //this inpute is controlled by react, its value is always tied to the inputeValue state
        onChange={(e) => {
          //onChange is basically the same thing as using an addEventListener
          //this updates the state as you time
          setInputValue(e.target.value); //this is the latest value in the input box
        }}
      />
      <button
        onClick={() => {
          if (!inputValue) { //making sure there is an input to add
            return;
          }
          handleAddTodo(inputValue); // Call parent function
          setInputValue("");
        }}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}
