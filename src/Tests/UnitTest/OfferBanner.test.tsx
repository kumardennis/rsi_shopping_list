import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import OfferBanner from "Components/OfferBanner/OfferBanner";

Enzyme.configure({ adapter: new Adapter() });

type Props = {
  imageSrc: string;
  offerTitle: string;
  offerDescription: string;
  index: number;
};

describe("Test Case For OfferBanner", () => {
  it("should render OfferBanner", () => {
    const wrapper = shallow(
      <OfferBanner imageSrc="" offerTitle="" offerDescription="" index={0} />
    );
    expect(wrapper.isEmptyRender()).toEqual(false);
  });

  it("should render children", () => {
    const wrapper = shallow(
      <OfferBanner imageSrc="" offerTitle="" offerDescription="" index={0} />
    );
    expect(wrapper.exists(".offer-image")).toEqual(true);
    expect(wrapper.exists(".offer-content")).toEqual(true);
  });
});
