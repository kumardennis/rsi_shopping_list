import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import HeroCarousel from "Components/HeroCarousel/HeroCarousel";

Enzyme.configure({ adapter: new Adapter() });

describe("Test Case For HeroCarousel", () => {
  it("should render carousel", () => {
    const wrapper = shallow(<HeroCarousel />);
    expect(wrapper.isEmptyRender()).toEqual(false);
  });

  it("should render children divs", () => {
    const wrapper = shallow(<HeroCarousel />);
    expect(wrapper.containsMatchingElement(<div />)).toEqual(true);
  });
});
