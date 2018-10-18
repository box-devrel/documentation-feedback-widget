import "../setupTests";
import { createElement } from "react";
import { shallow } from "enzyme";

import FormPrompt from "../../src/components/FormPrompt";

let onClick = jest.fn();
let className = "className";

let component = shallow(
  <FormPrompt 
    className={className}
    onClick={onClick} />,
);

test("it should contain a thank you message", () => {
  expect(component.text()).toContain("Thank you!");
  expect(component.text()).toContain("Would you like to tell us more?");
  expect(component.html()).toContain(className);
});

test("It should bind the onClick function", () => {
  component.find("a").simulate("click");
  expect(onClick).toBeCalled();
});

