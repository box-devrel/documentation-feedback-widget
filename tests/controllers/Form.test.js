import "../setupTests";
import { createElement } from "react";
import { shallow } from "enzyme";

import Form from "../../src/controllers/Form";

let onSubmit = jest.fn();
let preventDefault = jest.fn();
let setState = jest.fn();

let form = new Form({
  disabled: true,
  show: true,
  onSubmit: onSubmit
});

let component = shallow(
  <Form disabled={true} 
    show={true} 
    onSubmit={onSubmit} />);

test("expect it to render the form", () => {
  expect(component.props().disabled).toBe(true);
  expect(component.props().email).toBe(undefined);
  expect(component.props().name).toBe(undefined);
  expect(component.props().show).toBe(true);
});

test("expect it to start with the right default state", () => {
  expect(form.state.name).toBe(undefined);
  expect(form.state.email).toBe(undefined);
  expect(form.state.note).toBe(undefined);
});

test("expect it to handle submits and prevent actual form submissions", () => {
  form.onSubmit({ preventDefault: preventDefault});
  expect(onSubmit).toHaveBeenCalledWith(form.state);
  expect(preventDefault).toHaveBeenCalled();
});

test("expect it to handle input changes", () => {
  let onInput = form.onInput("name");
  form.setState = setState;
  onInput({ value: "New Name" });
  expect(setState).toHaveBeenCalledWith({ "name": { "value": "New Name" } });
});