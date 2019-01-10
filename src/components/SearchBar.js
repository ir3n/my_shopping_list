import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  state = { term: "" };

  onTermSubmit = event => {
    event.preventDefault();
    this.checkInput(this.state.term);
    this.setState({ term: "" });
  };
  checkInput = term => {
    if (this.props.groceries.includes(term)) {
      alert(`You have already added ${term} in your shopping list.`);
    } else {
      this.props.onSubmit(this.state.term);
    }
  };

  render() {
    return (
      <form onSubmit={this.onTermSubmit}>
        <input
          type="text"
          value={this.state.term}
          onChange={e => this.setState({ term: e.target.value })}
          placeholder="I need..."
          required
        />
        <button className="form-button">
          <i className="icon ion-md-arrow-round-forward" />
        </button>
      </form>
    );
  }
}

export default SearchBar;
