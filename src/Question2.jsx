import React from 'react';
import { useState } from 'react';


/*
In cases where you're working with a value that updates frequently, such as a text input,

Create a custom hook useDebounce() that allows you to debounce such values.

Here's how you can implement it:

function App() {
  const [value, setValue] = useState(...); // Assume this value updates often
  const debouncedValue = useDebounce(value, 1000); // Value is debounced with a delay of 1000ms
}

This setup ensures that the debouncedValue only updates after 1000 milliseconds have passed.
*/


export const Question2 = () => {
    const [text, setText] = useState("");
    // const debouncedText = useDebounce(text, 1000); // 1000ms delay
  
    return (
      <div>
        <h2>Debounce Hook Tester</h2>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
          style={{ marginRight: "10px" }}
        />
        <p>Debounced Value: </p>
      </div>
    );
  };

  export default Question2;