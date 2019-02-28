import React, { Component } from "react";
import SimpleStorage from "react-simple-storage";
import SearchBar from "./SearchBar";
import List from "./List";
import Notes from "./Notes";
import "./App.css";

class App extends Component {
  state = { groceries: [], notes: "" };

  onTermSubmit = term => {
    this.setState({ groceries: [...this.state.groceries, term] });
    console.log(this.state);
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
    localStorage.clear();
  };
  changeStateNotes = text => {
    this.setState({ notes: text });
  };

  render() {
    return (
      <div className="container minimum">
        <SimpleStorage parent={this} />
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
            <div className="btn-row d-flex justify-content-center">
              <button onClick={this.onClearBtnClick} className="clear-btn">
                <i className="fas fa-times" />
                <div>Clear List</div>
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-flex notes-absolute ">
            <Notes
              onSubmit={this.changeStateNotes}
              onChange={this.changeStateNotes}
              text={this.state.notes}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
