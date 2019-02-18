import React, { Component } from "react";
import "./ListItem.css";

class ListItem extends Component {
  state = { checked: false };

  onCheckBtnClick = () => {
    return this.setState({ checked: !this.state.checked });
  };

  render() {
    return (
      <div className="row px-2 px-lg-3">
        <div
          className={
            this.state.checked
              ? "line-through text-truncate col-8"
              : "text-truncate col-8"
          }
        >
          {this.props.item}
        </div>
        <div className="col-4 text-right">
          <button
            onClick={this.onCheckBtnClick}
            data-toggle="tooltip"
            data-placement="top"
            title="Purchased"
          >
            <i className="far fa-check-circle small-icon text-success" />
          </button>
          <button
            value={this.props.item}
            onClick={this.props.onDeleteBtnClick}
            data-toggle="tooltip"
            data-placement="bottom"
            title="Remove from list"
          >
            <i className="far fa-times-circle text-danger small-icon" />
          </button>
        </div>
      </div>
    );
  }
}
export default ListItem;
