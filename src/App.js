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
    toggleButton: false,
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

  toggleButtonFunction = () => {
    this.setState({ toggleButton: !this.state.toggleButton });
  };
  //реализуем как обычную функцию
  onChangeName(name, index) {
    const newNameCar = name;
    const newArrCars = this.state.cars;
    newArrCars[index].name = newNameCar;
    this.setState({
      cars: newArrCars,
    });
  }

  // удаление элемента массива
  onDeleteHandler(index) {
    const cars = this.state.cars.concat();
    cars.splice(index, 1);
    this.setState({
      cars,
    });
  }

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
                  onChangeName={(event) =>
                    this.onChangeName(event.target.value, index)
                  }
                  onDelete={this.onDeleteHandler.bind(this, index)}
                />
              );
            })
          : null}
      </div>
    );
  }
}

export default App;
