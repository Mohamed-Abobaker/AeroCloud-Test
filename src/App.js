import React, { Component } from "react";
import "./App.css";
import * as data from "./data";

class App extends Component {
  state = {
    hotels: data,
    arr1: ["car park", "pool", "gym"]
  };

  render() {
    const { hotels, arr1 } = this.state;
    return (
      <div className="App">
        <h1>Hotels</h1>
        <form>
          <p>Filter By: </p>
          {arr1.map(facility => {
            return (
              <div key={facility}>
                <label htmlFor={`${facility}`}>{facility}</label>
                <input
                  type="checkbox"
                  id={facility}
                  value={facility}
                  onClick={this.handleCheckBox}
                />
              </div>
            );
          })}
          <br />
        </form>
        <h2>Results</h2>
        {hotels.map(hotel => {
          return (
            <p key={hotel.name}>
              Name: {hotel.name}, Rating: {hotel.starRating}
            </p>
          );
        })}
      </div>
    );
  }
}

export default App;
