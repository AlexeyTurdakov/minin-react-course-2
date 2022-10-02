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
    toggleButton: false, // (2)
  };

  changeTitleHandle = (newTitle) => {
    this.setState({
      pageTitle: newTitle,
    });
  };

  changeInputFromValue = (event) => {
    this.setState({
      pageTitle: event.target.value,
    });
  };
  // (1)
  toggleButtonFunction = () => {
    this.setState({ toggleButton: !this.state.toggleButton });
  };

  render() {
 

    return (
      <div>
        <h1>{this.state.pageTitle}</h1>
        <button
          onClick={this.changeTitleHandle.bind(this, "changed from title")}
        >
          change title
        </button>
        <button onClick={this.toggleButtonFunction}>Toggle</button>
        <input onChange={this.changeInputFromValue}></input>
        {this.state.toggleButton
          ? this.state.cars.map((car, index) => {
              return (
                <Car
                  key={index}
                  name={car.name}
                  year={car.year}
                  changeTitle={() => this.changeTitleHandle(car.name)}
                />
              );
            })
          : null}

       


      </div>
    );
  }
}

export default App;
