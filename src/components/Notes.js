import React, { Component } from "react";
import "./Notes.css";

class Notes extends Component {
  state = { text: "" };

  onNotesSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.text);
  };

  render() {
    return (
      <div className="notes mt-4">
        <form className="notes-form" onSubmit={this.onNotesSubmit}>
          <label className="text-uppercase text-right">notes</label>
          <div className="row align-items-end justify-content-end">
            <textarea
              maxLength="200"
              value={this.props.text ? this.props.text : this.state.text}
              onChange={e => this.setState({ text: e.target.value })}
            />
            <button
              type="submit"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Save Notes"
            >
              <i className="fas fa-check notes-btn" />
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default Notes;
