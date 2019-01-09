import React from "react";
import ListItem from "./ListItem";
import "./List.css";

const List = ({ groceries }) => {
  const groceriesList = groceries.map(item => {
    return (
      <div>
        <ListItem
          key={groceries.indexOf(item)}
          groceries={groceries}
          item={item}
        />
      </div>
    );
  });
  if (groceries.length === 0) {
    return <div className="empty">Your list is empty.</div>;
  }
  return <div className="item">{groceriesList}</div>;
};
export default List;
