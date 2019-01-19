import React, { Component } from "react";
import ListItem from "./ListItem";
import "./List.css";

class List extends Component {
  render() {
    const groceriesList = this.props.groceries.map(item => {
      return (
        <div key={item}>
          <span className="d-inline">
            <ListItem
              groceries={this.props.groceries}
              item={item}
              onDeleteBtnClick={this.props.onDeleteBtnClick}
            />
          </span>
        </div>
      );
    });
    if (this.props.groceries.length === 0) {
      return <div className="empty text-center mt-4">Your list is empty.</div>;
    }

    return <div className="">{groceriesList}</div>;
  }
}
export default List;
