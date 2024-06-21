import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";

describe("Header Componeent Tests", () => {
  it("Renders without crashing", () => {
    const header = shallow(<Header />);
    expect(header).toBeDefined();
  });
  it("renders a img in the  App-header", () => {
    const header = shallow(<Header />);

    expect(header.find("img")).toBeDefined();
  });
  it("renders h1 in App-header", () => {
    const header = shallow(<Header />);

    expect(header.find("h1").text()).toBe("Login to access the full dashboard");
  });
  
});