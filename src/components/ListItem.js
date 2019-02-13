import React, { Component } from "react";
import "./ListItem.css";

class ListItem extends Component {
  state = { num: 1, unit: "", checked: false };

  onCheckBtnClick = () => {
    return this.setState({ checked: !this.state.checked });
  };

  render() {
    return (
      <div className="row">
        <div className="col-5 p-0 float-left">
          <input
            type="number"
            value={this.state.num}
            onChange={e => this.setState({ num: e.target.value })}
            min={1}
            max={999}
          />
          <select
            value={this.state.value}
            onChange={e => this.setState({ unit: e.target.value })}
          >
            <option value="items">items</option>
            <option value="g">g</option>
            <option value="kg">kg</option>
            <option value="packs">packs</option>
            <option value="cartons">cartons</option>
          </select>
        </div>
        <div
          className={
            this.state.checked
              ? "line-through text-truncate col-5 p-0"
              : "text-truncate col-5 p-0"
          }
        >
          {this.props.item}
        </div>

        <div className="col-2 p-0">
          <button
            onClick={this.onCheckBtnClick}
            data-toggle="tooltip"
            data-placement="top"
            title="Purchased"
          >
            <i className="far fa-check-circle small-icon text-success pl-1" />
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
