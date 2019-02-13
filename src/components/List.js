import React, { Component } from "react";
import ListItem from "./ListItem";
import "./List.css";

class List extends Component {
  render() {
    const groceriesList = this.props.groceries.map(item => {
      return (
        <div key={item} className="d-inline">
          <ListItem
            groceries={this.props.groceries}
            item={item}
            onDeleteBtnClick={this.props.onDeleteBtnClick}
          />
        </div>
      );
    });
    if (this.props.groceries.length === 0) {
      return (
        <div className="list-textbox text-center font-italic">
          Your list is empty.
        </div>
      );
    }

    return <div className="list-textbox">{groceriesList}</div>;
  }
}
export default List;
