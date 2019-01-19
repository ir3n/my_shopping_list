import React, { Component } from "react";
import "./ListItem.css";

class ListItem extends Component {
  state = { num: 1, unit: "", checked: false };

  onCheckBtnClick = () => {
    return this.setState({ checked: !this.state.checked });
  };

  render() {
    return (
      <div>
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

        <div className={this.state.checked ? "line-through inline" : "inline"}>
          {this.props.item}
        </div>

        <button
          value={this.props.item}
          onClick={this.props.onDeleteBtnClick}
          className="small-btn delete-btn"
        >
          <i className="delete icon ion-md-close" />
        </button>
        <button onClick={this.onCheckBtnClick} className="small-btn check-btn">
          <i className="check icon ion-md-checkmark" />
        </button>
      </div>
    );
  }
}
export default ListItem;
