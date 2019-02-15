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
    console.log(this.state);
    this.setState({ groceries: [], notes: "" });
  };
  onNotesSubmit = text => {
    this.setState({ notes: text });
  };

  render() {
    return (
      <div className="container minimum">
        <div className="row">
          <div className="col-lg-6 col-flex half-height">
            <div className="row justify-content-center py-md-5">
              <h1 className="text-uppercase">My Shopping List</h1>
              <SearchBar
                onSubmit={this.onTermSubmit}
                groceries={this.state.groceries}
              />
            </div>
          </div>
          <div className="col-lg-6 col-flex bg-image">
            <List
              groceries={this.state.groceries}
              onDeleteBtnClick={this.onDeleteBtnClick}
            />
            <div className="btns-row d-flex justify-content-center">
              <button>
                <i className="fas fa-check-circle text-success" />
              </button>
              <button onClick={this.onClearBtnClick}>
                <i className="fas fa-times-circle ml-2 text-danger" />
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-flex notes-absolute">
            <Notes onSubmit={this.onNotesSubmit} />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
