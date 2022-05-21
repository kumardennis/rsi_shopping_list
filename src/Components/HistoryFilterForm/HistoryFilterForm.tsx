import { useState } from "@hookstate/core";
import { Button, Form, Input } from "antd";
import React from "react";
import { cacheShoppingListState } from "shoppingListState";
import { onFilterFinish } from "utils";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 11, span: 16 },
};

const HistoryFilterForm = (): JSX.Element => {
  const cacheState = useState(cacheShoppingListState);

  const [form] = Form.useForm();

  const onFinish = (values: {
    item: string;
    store: string;
    date: string;
  }): void => {
    onFilterFinish(cacheState, values);
  };

  const onReset = (): void => {
    form.resetFields();
  };

  return (
    <div className="add-item-form">
      <h1>Filter Items By...</h1>
      <Form {...layout} form={form} name="add-item-form" onFinish={onFinish}>
        <Form.Item name="date" label="Date">
          <Input />
        </Form.Item>

        <Form.Item name="item" label="Item">
          <Input />
        </Form.Item>

        <Form.Item name="store" label="Store">
          <Input />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Filter
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default HistoryFilterForm;
