import { Divider } from "antd";
import HistoryFilterForm from "Components/HistoryFilterForm/HistoryFilterForm";
import HistoryTable from "Containers/HistoryTable/HistoryTable";
import React from "react";

const HistoryPage = (): JSX.Element => {
  return (
    <>
      <HistoryFilterForm /> <Divider /> <HistoryTable />
    </>
  );
};

export default HistoryPage;
