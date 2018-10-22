import "../setupTests";
import { createElement } from "react";
import { shallow } from "enzyme";

import Form from "../../src/components/Form";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

let onInput = jest.fn();
let onSubmit = jest.fn();
let className = "className";
let name = "formName";
let email = "formEmail";
let note = "";

test("it should contain the right content", () => {
  let component = shallow(
    <Form
      name={name}
      email={email}
      note={note}
      onInput={onInput}
      className={className}
      onSubmit={onSubmit}
      disabled={false}
    />,
  );

  expect(component.find(TextField).at(0).props().value).toEqual(name);
  expect(component.find(TextField).at(1).props().value).toEqual(email);
  expect(component.html()).toContain(className);
});

test("it should disable fields and buttons when needed", () => {
  let component = shallow(
    <Form
      name={name}
      email={email}
      note={note}
      onInput={onInput}
      className={className}
      onSubmit={onSubmit}
      disabled={true}
    />,
  );
  expect(component.find(TextField).at(0).props().disabled).toEqual(true);
  expect(component.find(TextField).at(1).props().disabled).toEqual(true);
  expect(component.find(TextField).at(2).props().disabled).toEqual(true);
  expect(component.find(Button).first().props().disabled).toEqual(true);
});

test("it should handle form submissions", () => {
  let component = shallow(
    <Form
      name={name}
      email={email}
      note={"A note"}
      onInput={onInput}
      className={className}
      onSubmit={onSubmit}
      disabled={false}
    />,
  );
  component.find("form").first().simulate("submit");
  expect(onSubmit).toBeCalled();
});