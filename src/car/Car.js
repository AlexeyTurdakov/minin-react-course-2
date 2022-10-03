import React from "react";

// function Car() {
//   return <h2>This is a car</h2>;
// }

const car = (props) => {
  return (
    <div style={{ border: "1px solid black" }}>
      <h2>This is a car {props.name}</h2>
      <h2>This is a year {props.year}</h2>
      <input type="text" onChange={props.onChangeName} value={props.name} />
      <button onClick={props.onDelete}>Delete</button>
    </div>
  );
};

export default car;
