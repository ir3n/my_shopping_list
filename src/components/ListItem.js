import React, { Component } from "react";
import "./ListItem.css";

class ListItem extends Component {
  state = { num: 1, unit: "", item: this.props.item, checked: false };

  onCheckBtnClick = () => {
    return this.setState({ checked: !this.state.checked });
  };

  render() {
    return (
      <div className="row px-2 px-lg-3 align-content-center">
        <div className="col-5 col-lg-6 float-left pr-0">
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
              ? "line-through text-truncate col-3 p-0"
              : "text-truncate col-3 p-0"
          }
        >
          {this.props.item}
        </div>

        <div className="col-3 text-right">
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
