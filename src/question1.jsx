import React from 'react';

/*
Initial Setup:
Let an array of strings called fruits, for example: ["apple", "banana", "cherry", "date", "elderberry"]
Display this list in the UI.

Search Input:
Use the provided input fields.
As the user types into the input, filter the displayed list to include only those items that contain the search term.

Real-Time Filtering:
The list should update as soon as the user types into the search box, without needing to submit a form or press a button.

No Matches:
Display a friendly message if no items match the search term.
*/


const Question1 = () => {
  const fruits = [
    "Apple",
    "Apricot",
    "Banana",
    "Blueberry",
    "Cherry",
    "Cranberry",
    "Date",
    "Dragonfruit",
    "Elderberry",
    "Fig",
    "Grape",
    "Grapefruit",
  ];

  return (
    <div>
      <input type="text" placeholder="Search here..." />
    </div>
  );
};

export default Question1;
