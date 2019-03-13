import React, { Component } from "react";
import "./App.css";
import * as data from "./data";

class App extends Component {
  state = {
    hotels: data
  };

  render() {
    const { hotels } = this.state;
    return (
      <div className="App">
        <h1>Hotels</h1>
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
