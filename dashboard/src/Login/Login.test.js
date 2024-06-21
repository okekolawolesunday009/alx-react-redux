import React from "react";
import Login from "./Login";
import { shallow } from "enzyme";

describe("Login Componeent Tests", () => {
  it("Renders without crashing", () => {
    const login = shallow(<Login />);
    expect(login).toBeDefined();
  });
  it("renders two input fields in .App-body", () => {
    const login = shallow(<Login />);

    expect(login.find("input")).toHaveLength(2);
  });
  it("renders two label fields in App-body", () => {
    const login = shallow(<Login />);

    expect(login.find("h1")).toHaveLength(2);
  });
  
});