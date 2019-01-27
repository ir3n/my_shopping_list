import React, { Component } from "react";
import SearchBar from "./SearchBar";
import List from "./List";
import Notes from "./Notes";
import "./App.css";

class App extends Component {
  state = { groceries: [], notes: "" };

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
  onClearBtnClick = () => {
    this.setState({ groceries: [], notes: "" });
  };
  onNotesSubmit = text => {
    this.setState({ notes: text });
  };

  render() {
    return (
      <div className="container ">
        <div className="row">
          <div className="col-lg-6">
            <div className="row justify-content-center py-lg-5 ">
              <h1 className="text-uppercase mb-5">My Shopping List</h1>
              <SearchBar
                onSubmit={this.onTermSubmit}
                groceries={this.state.groceries}
              />
            </div>
            <div className="row justify-content-center pt-lg-4">
              <Notes onSubmit={this.onNotesSubmit} />
            </div>
          </div>
          <div className="col-lg-6 bg-image list-textbox">
            <List
              groceries={this.state.groceries}
              onDeleteBtnClick={this.onDeleteBtnClick}
            />
            <div className="row btns-row">
              <button>
                <i className="fas fa-check-circle text-success" />
              </button>
              <button onClick={this.onClearBtnClick}>
                <i className="fas fa-times-circle ml-2 text-danger" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
