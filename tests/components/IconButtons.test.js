import "../setupTests";
import { createElement } from "react";
import { shallow } from "enzyme";

import IconButton from "../../src/components/IconButton";
import IconButtons from "../../src/components/IconButtons";

let callback = jest.fn();
let onClick = () => {
  return callback;
};

let component = shallow(
  <IconButtons
    submitted={false} 
    loading={false}
    response={null} 
    onClick={onClick} />,
);

test("it should contain two buttons", () => {
  expect(component.text()).toContain("<IconButton /><IconButton />");
  expect(component.html()).toContain("Yes");
  expect(component.html()).toContain("No");
});

test("It should bind the onClick function on the first button", () => {
  component
    .find(IconButton)
    .first()
    .simulate("click");
  expect(callback).toBeCalled();
});

test("It should bind the onClick function on the second button", () => {
  component
    .find(IconButton)
    .last()
    .simulate("click");
  expect(callback).toBeCalled();
});

