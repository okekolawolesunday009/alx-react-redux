import React from "react";
import Footer from "./Footer";
import { shallow } from "enzyme";

describe("Footer Componeent Tests", () => {
  it("Renders without crashing", () => {
    const footer = shallow(<Footer />);
    expect(footer).toBeDefined();
  });
  it("renders at least the text 'Copyright' in .App-footer", () => {
    const footer = shallow(<Footer />);

    expect(footer.text()).toContain('expected text');
  });
 
});