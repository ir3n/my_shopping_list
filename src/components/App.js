import React, { Component } from "react";
import SearchBar from "./SearchBar";
import List from "./List";
import "./App.css";

class App extends Component {
  state = { groceries: [] };

  onTermSubmit = term => {
    this.setState({ groceries: [...this.state.groceries, term] });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <div className="col2">
          <div className="row centered">
            <h1>My Shopping List</h1>
          </div>
          <div className="wrapper centered">
            <SearchBar onSubmit={this.onTermSubmit} />
          </div>
        </div>
        <div className="col2 bg-image">
          <div className="wrapper smaller">
            <List groceries={this.state.groceries} />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
