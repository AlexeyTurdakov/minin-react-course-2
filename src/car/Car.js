import React from "react";

// function Car() {
//   return <h2>This is a car</h2>;
// }

const car = (props) => {
  return (
    <div>
      <h2>This is a car {props.name}</h2>
      <h2>This is a year {props.year}</h2>
      <button onClick={props.changeTitle}>Click</button>
    </div>
  );
};

export default car;
