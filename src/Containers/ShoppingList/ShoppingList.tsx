import React from "react";
import { useState } from "@hookstate/core";
import { cacheShoppingListState, shoppingListState } from "shoppingListState";
import ShoppingListItem from "Components/ShoppingListItem/ShoppingListItem";
import { List } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import "./styles.scss";
import { deleteItem } from "utils";

const ShoppingList = (): JSX.Element => {
  const state = useState(shoppingListState);
  const cacheState = useState(cacheShoppingListState);

  const shoppingList = state.get();

  const handleDeleteItem = (uuid: string): void => {
    deleteItem(state, cacheState, uuid);
  };

  return (
    <div className="shopping-list">
      {shoppingList.map<React.ReactNode>(
        (item) =>
          item.item !== "" && (
            <List.Item key={item.uuid}>
              <ShoppingListItem item={item.item} store={item.store} />
              <DeleteOutlined
                onClick={() => handleDeleteItem(item.uuid)}
                className="delete-icon"
              />
            </List.Item>
          )
      )}
    </div>
  );
};

export default ShoppingList;
