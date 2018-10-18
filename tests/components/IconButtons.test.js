import "../setupTests";
import { createElement } from "react";
import { shallow } from "enzyme";

import IconButtons from "../../src/components/IconButtons";

let onClick = jest.fn();

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

test("It should bind the onClick function", () => {
  component.simulate("click");
  expect(onClick).toBeCalled();
});

