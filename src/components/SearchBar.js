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
          className="px-3 mr-3"
          type="text"
          value={this.state.term}
          onChange={e => this.setState({ term: e.target.value })}
          placeholder="I need..."
          required
        />
        <button>
          <i className="fas fa-arrow-circle-right arrow-icon" />
        </button>
      </form>
    );
  }
}

export default SearchBar;
