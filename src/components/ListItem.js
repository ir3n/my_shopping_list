import React, { Component } from "react";
import "./ListItem.css";

class ListItem extends Component {
  state = { num: 1, unit: "" };

  render() {
    //console.log(this.state);
    //console.log(this.props.groceries);
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

        {this.props.item}
      </div>
    );
  }
}
export default ListItem;
