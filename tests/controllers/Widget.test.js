import "../setupTests";
import { createElement } from "react";
import { shallow } from "enzyme";

import Widget from "../../src/controllers/Widget";

let widget;
let setState;
let component;;

beforeEach(() => {
  widget = new Widget({
    endpoint: 'http://localhost:8080/'
  });

  setState = jest.fn();
  widget.setState = setState;

  component = shallow(<Widget endpoint="http://localhost:8080/" />);
});


test("expect it to set the default props", () => {
  expect(component.props().theme).not.toBeUndefined;
  expect(widget.props.endpoint).not.toBeUndefined;
});

test("expect it to start with the right default state", () => {
  expect(widget.state.responseId).toBeNull;
  expect(widget.state.response).toBeNull;
  expect(widget.state.showForm).toBeFalse;
  expect(widget.state.showFormPrompt).toBeFalse;
  expect(widget.state.submitted).toBeFalse;
  expect(widget.state.submittingShortResponse).toBeFalse;
  expect(widget.state.submittingLongResponse).toBeFalse;
});

test("#submitShortResponse(true)", () => {
  let postShortData = widget.postShortData = jest.fn();
  widget.submitShortResponse(true)()
  expect(setState).toHaveBeenCalledWith({
    submittingShortResponse: true,
    response: true
  })
  expect(postShortData).toHaveBeenCalledWith(true);
});

test("#submitShortResponse(false)", () => {
  let postShortData = (widget.postShortData = jest.fn());
  widget.submitShortResponse(false)();
  expect(setState).toHaveBeenCalledWith({
    submittingShortResponse: true,
    response: false
  });
  expect(postShortData).toHaveBeenCalledWith(false);
});

test("#submitLongResponse", () => {
  let postLongData = (widget.postLongData = jest.fn());
  let data = { name: 'Name', email: 'email', note: 'note' };

  widget.submitLongResponse(data);
  expect(setState).toHaveBeenCalledWith({
    submittingLongResponse: true
  });
  expect(postLongData).toHaveBeenCalledWith(data);
});

test("#onShortDataSubmitted when negative", () => {
  widget.state.response = false;
  let data = { id: '123' };

  widget.onShortDataSubmitted(data);
  expect(setState).toHaveBeenCalledWith({
    id: '123',
    submittingShortResponse: false,
    showForm: true,
    showFormPrompt: false
  });
});

test("#onShortDataSubmitted when positive", () => {
  widget.state.response = true;
  let data = { id: "123" };

  widget.onShortDataSubmitted(data);
  expect(setState).toHaveBeenCalledWith({
    id: "123",
    submittingShortResponse: false,
    showForm: false,
    showFormPrompt: true
  });
});

test("#onShortDataSubmitted when positive and previous negative", () => {
  widget.state.response = true;
  widget.state.showForm = true;
  let data = { id: "123" };

  widget.onShortDataSubmitted(data);
  expect(setState).toHaveBeenCalledWith({
    id: "123",
    submittingShortResponse: false,
    showForm: true,
    showFormPrompt: false
  });
});

test("#onLongDataSubmitted", () => {
  widget.onLongDataSubmitted();
  expect(setState).toHaveBeenCalledWith({
    submitted: true,
    submittingLongResponse: false,
    showForm: false
  });
});

test("#setShowForm", () => {
  widget.setShowForm();
  expect(setState).toHaveBeenCalledWith({
    showForm: true,
    showFormPrompt: false
  });
});


test("#postShortData", () => {
  widget.fetch = jest.fn().mockImplementation(() => Promise.resolve({
    json: () => Promise.resolve({})
  }));

  widget.postShortData(true);
  expect(widget.fetch).toHaveBeenCalledWith(
    "http://localhost:8080//feedback/short",
    { 
      "body": "{\"useful\":true,\"url\":\"http://localhost/\"}", 
      "headers": { 
        "Content-Type": "application/json; charset=utf-8" 
      }, 
      "method": "POST" 
    }
  );
});

test("#postLongData", () => {
  widget.fetch = jest.fn().mockImplementation(() => Promise.resolve({
    json: () => Promise.resolve({})
  }));

  widget.state.response = true;

  widget.postLongData({
    name: 'Name',
    email: 'Email',
    note: 'Note'
  });

  expect(widget.fetch).toHaveBeenCalledWith(
    "http://localhost:8080//feedback/long",
    {
      "body": "{\"name\":\"Name\",\"email\":\"Email\",\"note\":\"Note\",\"url\":\"http://localhost/\",\"useful\":true}",
      "headers": {
        "Content-Type": "application/json; charset=utf-8"
      },
      "method": "POST"
    }
  );
});
