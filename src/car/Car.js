import React, { Component } from "react";

class Car extends Component {
  


  render() {
    console.log("car render");
//эмулируем ошибку
    if (Math.random() > 0.7) {
        throw new Error('error car render')
    }

    const inputClasses = ["input"];

    if (this.props.name !== "") {
      inputClasses.push("green");
    } else {
      inputClasses.push("red");
    }

    return (
      <div className="car">
        <h2>This is a car {this.props.name}</h2>
        <h2>This is a year {this.props.year}</h2>
        <input
          className={inputClasses.join(" ")}
          type="text"
          onChange={this.props.onChangeName}
          value={this.props.name}
        />

        <button onClick={this.props.onDelete}>Delete</button>
      </div>
    );
  }
}

export default Car;
