import "../setupTests";
import { createElement } from "react";
import { render, shallow } from "enzyme";

import IconButton from "../../src/components/IconButton";

let onClick = jest.fn();

test("it should render a thumbs up button", () => {
  let component = render(
    <IconButton 
      positive={true}
      loading={false}
      response={null}
      onClick={onClick} />
  );
  expect(component.html()).toContain("<path d=\"M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z\"/>");
});

test("it should render a thumbs down button", () => {
  let component = render(
    <IconButton 
      positive={false}
      loading={false}
      response={null}
      onClick={onClick} />
  );
  expect(component.html()).toContain("<path d=\"M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z\"/>");
});

test("it should render a loading positive button", () => {
  let component = render(
    <IconButton 
      positive={true}
      loading={true}
      response={true}
      onClick={onClick} />
  );
  expect(component.html()).toContain("path d=\"M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z\"/><path fill=\"none\" d=\"M0 0h24v24H0z\"/>");
});

test("it should render a loading negative button", () => {
  let component = render(
    <IconButton 
      positive={false}
      loading={true}
      response={false}
      onClick={onClick} />
  );
  expect(component.html()).toContain("path d=\"M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z\"/><path fill=\"none\" d=\"M0 0h24v24H0z\"/>");
});

test("It should bind the onClick function", () => {
  let component = shallow(
    <IconButton 
      positive={false}
      loading={true}
      response={false}
      onClick={onClick} />
  );

  component.simulate("click");
  expect(onClick).toBeCalled();
});
