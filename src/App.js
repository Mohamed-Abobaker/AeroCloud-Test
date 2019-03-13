import React, { Component } from "react";
import "./App.css";
import * as data from "./data";
import { filterFunc } from "./utils";

class App extends Component {
  state = {
    hotels: data,
    facils: ["car park", "pool", "gym"],
    chosenFacils: []
  };

  handleCheckBox = e => {
    const { checked, value } = e.target;
    const change = [...this.state.chosenFacils];
    change.splice(change.indexOf(value), 1);

    checked
      ? this.setState({
          chosenFacils: [value, ...this.state.chosenFacils]
        })
      : this.setState({
          chosenFacils: change
        });
  };

  render() {
    const { hotels, facils, chosenFacils } = this.state;
    const filteredHotels = filterFunc(hotels, chosenFacils);
    return (
      <div className="App">
        <h1>Hotels</h1>
        <form>
          <p>Filter By: </p>
          {facils.map(facility => {
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
        <div>
          <label htmlFor="SortBy">Sort By: </label>
          <select id="SortBy" onChange={this.handleSortBy}>
            <option key={"disabled"} value={null} defaultValue disabled>
              Select
            </option>
            <option value={1}>Ratings (descending)</option>
            <option value={2}>Ratings (ascending)</option>
          </select>
        </div>
        {filteredHotels.map(hotel => {
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
