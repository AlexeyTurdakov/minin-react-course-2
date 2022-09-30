import React, { Component } from "react";
import "./App.css";
import Car from "./car/Car";

class App extends Component {
  state = {
    cars: [
      { name: "Ford", year: 2018 },
      { name: "Audi", year: 2016 },
      { name: "Mazda", year: 2010 },
    ],
    pageTitle: "React components",
  };

  changeTitleHandle = (newTitle) => {
    this.setState({
      pageTitle: newTitle,
    });
  };

  changeInputFromValue = (event) => {
    this.setState({
      pageTitle: event.target.value
    })
  }
//атрибут onChange позволяет следить за состоянием инпута
//данный атрибут передаёт состояние event к которому можно 
// обратиться и прочитать значение
  render() {
    const cars = this.state.cars;

    return (
      <div>
        <h1>{this.state.pageTitle}</h1>
        <button
          onClick={this.changeTitleHandle.bind(this, "changed from title")}
        >
          change title
        </button>

        <input onChange={this.changeInputFromValue}></input>

        <Car
          name={cars[0].name}
          year={cars[0].year}
          changeTitle={this.changeTitleHandle.bind(this, cars[0].name)}
        ></Car>
        <Car
          name={cars[1].name}
          year={cars[1].year}
          changeTitle={() => this.changeTitleHandle(cars[1].name)}
        ></Car>
        <Car
          name={cars[2].name}
          year={cars[2].year}
          changeTitle={() => this.changeTitleHandle(cars[2].name)}
        ></Car>
      </div>
    );
  }
}

export default App;
