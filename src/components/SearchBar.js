import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  state = { term: "" };

  onTermSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
    this.setState({ term: "" });
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
        <button>
          <i class="icon ion-md-arrow-round-forward" />
        </button>
      </form>
    );
  }
}

export default SearchBar;
