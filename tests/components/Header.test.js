import "../setupTests";
import { createElement } from "react";
import { mount } from "enzyme";

import Header from "../../src/components/Header";

let className = "className";

let component = mount(
  <Header className={className} />,
);

test("it should contain a question", () => {
  expect(component.text()).toContain("Is this documentation useful?");
  expect(component.html()).toContain(className);
});

