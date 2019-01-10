import React from "react";
import ListItem from "./ListItem";
import "./List.css";

const List = ({ groceries }) => {
  const groceriesList = groceries.map(item => {
    return (
      <div key={item}>
        <span className="inline">
          <ListItem groceries={groceries} item={item} />
        </span>
        <button className="small-btn delete-btn">
          <i className="delete icon ion-md-close" />
        </button>
        <button className="small-btn check-btn">
          <i className="check icon ion-md-checkmark" />
        </button>
      </div>
    );
  });
  if (groceries.length === 0) {
    return <div className="empty">Your list is empty.</div>;
  }
  return <div className="item">{groceriesList}</div>;
};
export default List;
