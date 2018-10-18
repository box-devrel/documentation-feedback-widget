import "../setupTests";
import { createElement } from "react";
import { shallow } from "enzyme";

import ThankYouNote from "../../src/components/ThankYouNote";

let className = "className";

let component = shallow(
  <ThankYouNote 
    className={className} />,
);

test("it should contain a thank you message", () => {
  expect(component.html()).toContain("Thank you for your feedback.");
  expect(component.html()).toContain(className);
});
