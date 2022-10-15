import React, { Component } from "react";
import "./App.css";
import Car from "./car/Car";
import "./App.scss";
//экспортируем и key перемещаем в errorBoundary
// так как он является корневым
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: [
        { name: "Ford", year: 2018 },
        { name: "Audi", year: 2016 },
        { name: "Mazda", year: 2010 },
      ],
      pageTitle: "React components",
      toggleButton: true,
    };
  }

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

  onChangeName(name, index) {
    const newNameCar = name;
    const newArrCars = this.state.cars;
    newArrCars[index].name = newNameCar;
    this.setState({
      cars: newArrCars,
    });
  }

  onDeleteHandler(index) {
    const cars = this.state.cars.concat();
    cars.splice(index, 1);
    this.setState({
      cars,
    });
  }

  render() {
    const apiUrl = "http://127.0.0.1:3000";
    fetch(apiUrl, {method: "POST"})
      .then((response) => response.json())
      .then((data) => console.log("This is your data", data));

    return (
      <div>
        <h1>{this.props.title}</h1>
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
                <ErrorBoundary key={index}>
                  <Car
                    name={car.name}
                    year={car.year}
                    onChangeName={(event) =>
                      this.onChangeName(event.target.value, index)
                    }
                    onDelete={this.onDeleteHandler.bind(this, index)}
                  />
                </ErrorBoundary>
              );
            })
          : null}
      </div>
    );
  }
}

export default App;
