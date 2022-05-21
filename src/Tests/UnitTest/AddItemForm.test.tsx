import React from "react";
import Enzyme, { shallow } from "enzyme";
import { Form, Input, Button, Select } from "antd";
import Adapter from "enzyme-adapter-react-16";
import AddItemForm from "Containers/AddItemForm/AddItemForm";
import FormItem from "antd/lib/form/FormItem";

Enzyme.configure({ adapter: new Adapter() });

describe("Test Case For AddItemForm", () => {
  it("should render AddItemForm", () => {
    const wrapper = shallow(<AddItemForm />);
    expect(wrapper.isEmptyRender()).toEqual(false);
  });

  it("item change", () => {
    const wrapper = shallow(<AddItemForm />);

    console.log(wrapper.debug());

    const inputItem = wrapper.find("#add-item-input");
    inputItem.simulate("change", { target: { value: "item1" } });
  });
});
