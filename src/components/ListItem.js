import React, { Component } from "react";
import "./ListItem.css";

class ListItem extends Component {
  state = { checked: false };

  componentWillUnmount = () => {
    localStorage.clear();
  };
  onCheckBtnClick = item => {
    this.setState({ checked: !this.state.checked });
    localStorage.setItem(`${item}`, `${!this.state.checked}`);
    console.log(localStorage);
  };

  chooseClass = item => {
    const storage = JSON.parse(localStorage.getItem(`${item}`));
    console.log(storage);
    if (storage) {
      return "line-through text-truncate col-8";
    } else {
      return "text-truncate col-8";
    }
  };

  render() {
    return (
      <div className="row px-3 px-md-4 align-items-center">
        <div className={this.chooseClass(this.props.item)}>
          {this.props.item}
        </div>
        <div className="col-4 text-right">
          <button
            value={this.props.item}
            onClick={() => this.onCheckBtnClick(this.props.item)}
            data-toggle="tooltip"
            data-placement="top"
            title="Purchased"
          >
            <i className="fas fa-check small-icon check-btn" />
          </button>
          <button
            value={this.props.item}
            onClick={this.props.onDeleteBtnClick}
            data-toggle="tooltip"
            data-placement="bottom"
            title="Remove from list"
          >
            <i className="fas fa-trash-alt small-icon delete-icon" />
          </button>
        </div>
      </div>
    );
  }
}
export default ListItem;
