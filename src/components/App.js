import React, { Component } from "react";
import SearchBar from "./SearchBar";
import List from "./List";
import "./App.css";

class App extends Component {
  state = { groceries: [] };

  onTermSubmit = term => {
    this.setState({ groceries: [...this.state.groceries, term] });
  };
  onDeleteBtnClick = e => {
    const clickedItem = e.target.parentElement.value;
    const newGroceries = this.state.groceries.filter(
      item => item !== clickedItem
    );
    this.setState({ groceries: newGroceries });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="row mt-5 mx-auto">
              <h1 className="text-uppercase mb-5 mx-auto">My Shopping List</h1>
              <div className="mx-auto">
                <SearchBar
                  onSubmit={this.onTermSubmit}
                  groceries={this.state.groceries}
                />
              </div>
              <div className="row mt-5 mx-auto">
                <div className="notes mt-5">
                  <label>NOTES</label>
                  <textarea maxLength="120" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 bg-image list-textbox">
            <List
              groceries={this.state.groceries}
              onDeleteBtnClick={this.onDeleteBtnClick}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
