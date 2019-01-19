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
        <div className="col-9">
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

          <div
            className={
              this.state.checked ? "line-through d-inline" : "d-inline"
            }
          >
            <div className="d-inline overflow-auto">{this.props.item}</div>
          </div>
        </div>
        <div className="col-3">
          <button value={this.props.item} onClick={this.props.onDeleteBtnClick}>
            <i class="far fa-times-circle delete bigger-hover" />
          </button>
          <button onClick={this.onCheckBtnClick}>
            <i class="far fa-check-circle check bigger-hover" />
          </button>
        </div>
      </div>
    );
  }
}
export default ListItem;
