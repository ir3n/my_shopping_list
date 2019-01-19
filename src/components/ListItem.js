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
        <div className="col-5 p-0">
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
            <option value="package">packages</option>
            <option value="package">cartons</option>
          </select>
        </div>
        <div
          className={
            this.state.checked
              ? "line-through d-inline col-5 p-0"
              : "d-inline col-5 p-0 overflow-hidden"
          }
        >
          {this.props.item}
        </div>

        <div className="col-2 p-0">
          <button value={this.props.item} onClick={this.props.onDeleteBtnClick}>
            <i class="far fa-times-circle delete small-icon" />
          </button>
          <button onClick={this.onCheckBtnClick}>
            <i class="far fa-check-circle check small-icon" />
          </button>
        </div>
      </div>
    );
  }
}
export default ListItem;
