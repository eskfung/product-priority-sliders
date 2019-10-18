import React from "react";
import { shallow } from "enzyme";
import Slider from "./Slider";

function subject(props = {}) {
  return shallow(<Slider {...props} />);
}

describe("Slider", () => {
  it("triggers onChange with the new numeric value", () => {
    const onChange = jest.fn();
    const wrapper = subject({ onChange });
    wrapper.find("input").simulate("change", { target: { value: "5" } });

    expect(onChange).toHaveBeenCalledWith(5);
  });
});
