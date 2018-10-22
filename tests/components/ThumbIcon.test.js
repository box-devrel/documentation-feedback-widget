import "../setupTests";
import { createElement } from "react";
import { render } from "enzyme";

import ThumbIcon from "../../src/components/ThumbIcon";

test("it should render a thumbs up button", () => {
  let component = render(
    <ThumbIcon positive={true} />
  );
  expect(component.html()).toContain("<path d=\"M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z\"></path>");
});

test("it should render a thumbs down button", () => {
  let component = render(
    <ThumbIcon positive={false} />
  );
  expect(component.html()).toContain("<path d=\"M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z\"></path>");
});
