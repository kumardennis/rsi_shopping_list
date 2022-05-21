import { Divider } from "antd";
import AddItemForm from "Containers/AddItemForm/AddItemForm";
import ShoppingList from "Containers/ShoppingList/ShoppingList";
import React from "react";

const ShoppingListPage = (): JSX.Element => {
  return (
    <>
      <AddItemForm />
      <Divider />
      <ShoppingList />
    </>
  );
};

export default ShoppingListPage;
