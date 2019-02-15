import React, { Component } from "react";
import "./Notes.css";

class Notes extends Component {
  state = { notes: "" };

  onNotesSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.notes);
  };
  render() {
    return (
      <div className="notes mt-4">
        <form className="notes-form" onSubmit={this.onNotesSubmit}>
          <label className="text-uppercase text-right">notes</label>
          <div className="row align-items-end justify-content-end">
            <textarea
              maxLength="200"
              value={this.state.notes}
              onChange={e => this.setState({ notes: e.target.value })}
            />
            <button className="notes-btn" type="submit">
              <i className="fas fa-check-circle text-secondary " />
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default Notes;
