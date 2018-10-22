import "../setupTests";
import { createElement } from "react";
import { shallow } from "enzyme";

import Widget from "../../src/components/Widget";

let onClick = jest.fn();



test("it contain only the header and buttons", () => {
  let component = shallow(
    <Widget
      submitted={false}
      submittingShortResponse={false}
      submittingLongResponse={false}
      response={false}
      showForm={false}
      showFormPrompt={false}
      onSubmitShortResponse={onClick}
      onSubmitLongResponse={onClick}
      setShowForm={false} />
  );

  expect(component.text()).toEqual("<Header /><IconButtons />");
});

test("it should contain one loader for the form", () => {
  let component = shallow(
    <Widget
      submitted={false}
      submittingShortResponse={false}
      submittingLongResponse={false}
      response={false}
      showForm={true}
      showFormPrompt={false}
      onSubmitShortResponse={onClick}
      onSubmitLongResponse={onClick}
      setShowForm={false} />
  );

  expect(component.text()).toEqual("<Header /><IconButtons /><Loader />");
});

test("it should contain one loader for the form prompt", () => {
  let component = shallow(
    <Widget
      submitted={false}
      submittingShortResponse={false}
      submittingLongResponse={false}
      response={false}
      showForm={false}
      showFormPrompt={true}
      onSubmitShortResponse={onClick}
      onSubmitLongResponse={onClick}
      setShowForm={false}
    />
  );

  expect(component.text()).toEqual("<Header /><IconButtons /><Loader />");
});


test("it should contain one loader for the thank you message", () => {
  let component = shallow(
    <Widget
      submitted={true}
      submittingShortResponse={false}
      submittingLongResponse={false}
      response={false}
      showForm={false}
      showFormPrompt={false}
      onSubmitShortResponse={onClick}
      onSubmitLongResponse={onClick}
      setShowForm={false}
    />
  );

  expect(component.text()).toEqual("<Header /><IconButtons /><Loader />");
});
