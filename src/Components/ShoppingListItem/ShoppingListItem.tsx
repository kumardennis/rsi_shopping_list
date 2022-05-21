import React from "react";
import "./styles.scss";
type Props = {
  item: string;
  store: string;
};

const ShoppingListItem = ({ item, store }: Props): JSX.Element => {
  return (
    <div className="list-item">
      <div className="list-item-text list-item-item">{item}</div>
      <div className="list-item-text list-item-store">{store}</div>
    </div>
  );
};

export default ShoppingListItem;
