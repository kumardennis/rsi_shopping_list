import React from "react";
import { Form, Input, Button, Select } from "antd";
import { useState } from "@hookstate/core";
import "./styles.scss";
import { shoppingListState, cacheShoppingListState } from "shoppingListState";
import { onAddItemFinish } from "utils";

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 10, span: 16 },
};

const AddItemForm = (): JSX.Element => {
  const [form] = Form.useForm();

  const state = useState(shoppingListState);
  const cacheState = useState(cacheShoppingListState);

  const onStoreChange = (value: string): void => {
    form.setFieldsValue({ store: value });
  };

  const onFinish = (values: {
    item: string;
    store: string;
    timestamp: string;
    uuid: string;
  }): void => {
    onAddItemFinish(state, cacheState, values);
  };

  const onReset = (): void => {
    form.resetFields();
  };

  return (
    <div className="add-item-form">
      <h1>Add Items To List</h1>
      <Form {...layout} form={form} name="add-item-form" onFinish={onFinish}>
        <Form.Item name="item" label="Item" rules={[{ required: true }]}>
          <Input id="add-item-input" />
        </Form.Item>
        <Form.Item name="store" label="Store" rules={[{ required: true }]}>
          <Select
            placeholder="Select a store"
            onChange={onStoreChange}
            allowClear
          >
            <Option value="store1">Store 1</Option>
            <Option value="store2">Store 2</Option>
            <Option value="store3">Store 3</Option>
          </Select>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Add To List
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddItemForm;
