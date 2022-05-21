import { Table } from "antd";
import React, { useEffect } from "react";
import { useState } from "@hookstate/core";
import { shoppingListState, cacheShoppingListState } from "shoppingListState";

const columns = [
  {
    title: "Date",
    dataIndex: "timestamp",
    key: "timestamp",
    width: "300px",
  },
  {
    title: "Item",
    dataIndex: "item",
    key: "item",
  },
  {
    title: "Store",
    dataIndex: "store",
    key: "store",
    render: (text: string): React.ReactElement => (
      <a
        rel="noreferrer"
        target="_blank"
        href="https://memegenerator.net/instance/74398462/squinting-leonardo-dicaprio-im-not-sure-what-you-mean"
      >
        {text}
      </a>
    ),
  },
];

const HistoryTable = (): JSX.Element => {
  const cacheState = useState(cacheShoppingListState);
  const shoppingList = cacheState.get();

  useEffect(() => {
    if (localStorage.getItem("shoppingListCache") !== null) {
      localStorage.getItem("shoppingListCache");

      const cacheShoppingList: any = JSON.parse(
        localStorage.getItem("shoppingListCache")!
      );

      cacheState.set((list) =>
        cacheShoppingList.filter((item: { uuid: string }) => item.uuid !== "")
      );
    }
  }, []);

  return (
    <Table pagination={false} dataSource={shoppingList} columns={columns} />
  );
};

export default HistoryTable;
