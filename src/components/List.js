import React, { Component } from "react";
import ListItem from "./ListItem";
import "./List.css";

class List extends Component {
  //i am trying to store the newGroceries here to pass it as an argument down when I call the handler function from App. But cannot update the state.
  state = { newGroceries: [] };

  onDeleteBtnClick = e => {
    const item = e.target.parentElement.value;
    let index = this.state.newGroceries.indexOf(item);
    if (index !== -1) {
      let newGroceries = [...this.props.groceries].slice(index, index);
      console.log(newGroceries);
      return newGroceries;
    }
  };
  render() {
    const groceriesList = this.props.groceries.map(item => {
      return (
        <div key={item}>
          <span className="inline">
            <ListItem groceries={this.props.groceries} item={item} />
          </span>
          <button
            value={item}
            onClick={this.onDeleteBtnClick}
            className="small-btn delete-btn"
          >
            <i className="delete icon ion-md-close" />
          </button>
          <button className="small-btn check-btn">
            <i className="check icon ion-md-checkmark" />
          </button>
        </div>
      );
    });
    if (this.props.groceries.length === 0) {
      return <div className="empty">Your list is empty.</div>;
    }

    return <div className="item">{groceriesList}</div>;
  }
}
export default List;
